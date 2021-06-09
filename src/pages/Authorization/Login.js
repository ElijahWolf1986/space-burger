import React from "react";
import {
  // useSelector,
  useDispatch,
} from "react-redux";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import {
  addLoginClientData,
  //   removeLoginClientData, //action для удаления данных по логированию из стора, пока оставлю это здесь)
} from "../../services/actions";

function Login() {
  const dispatch = useDispatch();
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const isMailValid = email ? email.match(emailPattern) : "null"; //проводим валидацию введенного email на стороне клиента

  const onLogin = (evt) => {
    // form logic => work with redux
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
    dispatch(addLoginClientData({ email, password }));
    setEmail("");
    setPassword("");
  };

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const changePassword = (evt) => {
    setPassword(evt.target.value);
  };

  // const { loginEmail, loginPassword } = useSelector((store) => ({
  //   loginEmail: store.login.email,
  //   loginPassword: store.login.password,
  // }));
  // console.log(loginEmail, loginPassword); //данны из стора, пока оставлю это здесь)

  return (
    <form className={styles.login_container} onSubmit={onLogin} noValidate>
      <h2 className={styles.login_title}>Вход</h2>
      <span className={styles.login_error}>{error}</span>
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
      <div className={styles.login_button} type="submit">
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
