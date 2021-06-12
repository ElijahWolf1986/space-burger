import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { createUser } from "../../services/actions";
import { emailPattern } from "../../utils/constants";

function Register() {
  const dispatch = useDispatch();
  const { success } = useSelector((store) => ({
    success: store.user.success,
  }));
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const isMailValid = email ? email.match(emailPattern) : "null"; //проводим валидацию введенного email на стороне клиента

  const onRegister = (evt) => {
    evt.preventDefault();
    if (!email || !password || !name) {
      setError("Нужно заполнить все поля");
      setTimeout(() => setError(""), 3000);
      return;
    }
    if (isMailValid === null) {
      setError("Вы ввели неверный адрес почты");
      setTimeout(() => setError(""), 3000);
      return;
    }
    dispatch(createUser({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  const changeName = (evt) => {
    setName(evt.target.value);
  };

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const changePassword = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <form className={styles.login_container} onSubmit={onRegister} noValidate>
      <h2 className={styles.login_title}>Регистрация</h2>
      <span className={styles.login_error}>{error}</span>
      <span className={styles.login_message}>
        {success ? "Ура вы зарегились!" : ""}
      </span>

      <Input
        type="text"
        isRequired
        placeholder="Имя"
        value={name}
        handleChange={changeName}
      />
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
          Зарегистрироваться{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Уже зарегестрированы? <Link to="/">Войти</Link>{" "}
      </p>
    </form>
  );
}

export default Register;
