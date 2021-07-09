import React, { ChangeEvent, FormEvent, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { loginUser } from "../../services/actions";
import { emailPattern } from "../../utils/constants";
import { RootState } from "../../services/store";


interface LocationState {
  from: {
    pathname: string;
  };
}

const Login: FC = () =>{
  const location = useLocation<LocationState>();
  const { success, userName } = useSelector((store: RootState) => ({
    success: store.user.success,
    userName: store.user.user.name,
  }));

  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const isMailValid = email ? email.match(emailPattern) : "null"; //проводим валидацию введенного email на стороне клиента
  const isToken = localStorage.getItem("refreshToken");

  const onLogin = (evt: FormEvent) => {
    evt.preventDefault();
    if (!email || !password) {
      setError("Нужно заполнить оба поля");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (isMailValid === null) {
      setError("Вы ввели неверный адрес почты");
      setTimeout(() => setError(""), 3000);
      return;
    }
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  const changeEmail = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setEmail(target.value);
  };

  const changePassword = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setPassword(target.value);
  };

  if (isToken) {
    return (
      <Redirect to={location.state ? location.state.from.pathname : "/"} />
    );
  }

  return (
    <form className={styles.login_container} onSubmit={onLogin} noValidate>
      <h2 className={styles.login_title}>Вход</h2>
      <span className={styles.login_error}>{error}</span>
      <span className={styles.login_message}>
        {success && userName ? `Ура ${userName} вы зашли в свой аккаунт!` : ""}
      </span>
      <Input
        type="email"
        isRequired
        placeholder="E-mail"
        value={email}
        handleChange={changeEmail}
      />
      <Input
        type="password"
        isRequired
        placeholder="Пароль"
        value={password}
        handleChange={changePassword}
      />
      <div className={styles.login_button}>
        <Button type="primary" size="large">
          {" "}
          Войти{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Вы &mdash; новый пользователь?{" "}
        <Link to="/registration">Зарегистрироваться</Link>{" "}
      </p>
      <p className={styles.login_paragraph}>
        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>{" "}
      </p>
    </form>
  );
}

export default Login;
