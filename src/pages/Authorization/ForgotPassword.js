import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { emailPattern } from "../../utils/constants";
import { resetUserPassword } from "../../services/actions";

function ForgotPassword() {
  const history = useHistory();
  const { message, success } = useSelector((store) => ({
    message: store.user.message,
    success: store.user.success,
  }));
  const dispatch = useDispatch();

  const turnToResetPasswordPage = () => {
    if (success && message === "Reset email sent") {
      history.push("/reset-password");
    }
  };
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const isMailValid = email ? email.match(emailPattern) : "null"; //проводим валидацию введенного email на стороне клиента

  const onSubmit = (evt) => {
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
    dispatch(resetUserPassword());
    setEmail("");
  };

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  React.useEffect(() => {
    turnToResetPasswordPage();
  }, [success, message]);

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
      <div className={styles.login_button} type="submit">
        <Button type="primary" size="large">
          {" "}
          Восстановить{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Вспомнили пароль? <Link to="/">Войти</Link>{" "}
      </p>
    </form>
  );
}

export default ForgotPassword;
