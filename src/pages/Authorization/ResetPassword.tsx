import React, { ChangeEvent, FormEvent } from "react";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUserPassword } from "../../services/actions";

function ResetPassword() {
  const location = useLocation();
  const history = useHistory();
  const { message, success } = useSelector((store: any) => ({
    message: store.user.message,
    success: store.user.success,
  }));
  const dispatch = useDispatch();
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const isToken = localStorage.getItem("refreshToken");
  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!code || !password) {
      setError("Нужно заполнить оба поля");
      setTimeout(() => setError(""), 3000);
      return;
    }
    dispatch(resetUserPassword(password, code));
    setPassword("");
    setCode("");
  };

  const changeCode = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setCode(target.value);
  };
  const changePassword = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setPassword(target.value);
  };

  if (isToken) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
  if (success && message === "Password successfully reset") {
    history.push("/login");
  }

  if (!location.state) {
    history.push("/");
  }

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
      <div className={styles.login_button}>
        <Button type="primary" size="large">
          {" "}
          Сохранить{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Вспомнили пароль? <Link to="/login">Войти</Link>{" "}
      </p>
    </form>
  );
}

export default ResetPassword;
