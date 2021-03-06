import React, { ChangeEvent, FormEvent, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { emailPattern } from "../../utils/constants";
import { getCodeUserPassword } from "../../services/actions";
import { RootState } from "../../services/store";


const ForgotPassword: FC = () => {
  const location = useLocation();
  const { message, success } = useSelector((store: RootState) => ({
    message: store.user.message,
    success: store.user.success,
  }));
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const isMailValid = email ? email.match(emailPattern) : "null"; //проводим валидацию введенного email на стороне клиента
  const isToken = localStorage.getItem("refreshToken");
  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!email) {
      setError("Нужно ввести почту");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (isMailValid === null) {
      setError("Вы ввели неверный адрес почты");
      setTimeout(() => setError(""), 3000);
      return;
    }
    dispatch(getCodeUserPassword(email));
    setEmail("");
  };

  const changeEmail = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setEmail(target.value);
  };

  if (success && message === "Reset email sent") {
    return (
      <Redirect
        to={{
          pathname: "/reset-password",
          state: { from: location },
        }}
      />
    );
  }

  if (isToken) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <form className={styles.login_container} onSubmit={onSubmit} noValidate>
      <h2 className={styles.login_title}>Восстановление пароля</h2>
      <span className={styles.login_error}>{error}</span>
      <Input
        type="email"
        isRequired
        placeholder="Укажите e-mail"
        value={email}
        handleChange={changeEmail}
      />
      <div className={styles.login_button}>
        <Button type="primary" size="large">
          {" "}
          Восстановить{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Вспомнили пароль? <Link to="/login">Войти</Link>{" "}
      </p>
    </form>
  );
}

export default ForgotPassword;
