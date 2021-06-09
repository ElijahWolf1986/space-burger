import React from "react";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!code || !password) {
      setError("Нужно заполнить оба поля");
      setTimeout(() => setError(""), 3000);
      return;
    }
    setPassword("");
    setCode("");
  };

  const changeCode = (evt) => {
    setCode(evt.target.value);
  };
  const changePassword = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <form className={styles.login_container} onSubmit={onSubmit} noValidate>
      <h2 className={styles.login_title}>Восстановление пароля</h2>
      <span className={styles.login_error}>{error}</span>
      <Input
        type="password"
        isRequired
        placeholder="Введите новый пароль"
        value={password}
        handleChange={changePassword}
      />

      <Input
        type="text"
        isRequired
        placeholder="Введите код из письма"
        value={code}
        handleChange={changeCode}
      />
      <div className={styles.login_button} type="submit">
        <Button type="primary" size="large">
          {" "}
          Сохранить{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Вспомнили пароль? <Link to="/">Войти</Link>{" "}
      </p>
    </form>
  );
}

export default ResetPassword;
