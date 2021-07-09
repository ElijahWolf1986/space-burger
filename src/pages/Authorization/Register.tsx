import React, { ChangeEvent, FormEvent, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import styles from "./Authorization.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { createUser } from "../../services/actions";
import { emailPattern } from "../../utils/constants";
import { RootState } from "../../services/store";

const Register: FC = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((store: RootState) => ({
    success: store.user.success,
  }));
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const isMailValid = email ? email.match(emailPattern) : "null";
  const isToken = localStorage.getItem("refreshToken");

  const onRegister = (evt: FormEvent) => {
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

  const changeName = (evt: ChangeEvent) => {
    const target = evt.target as HTMLInputElement;
    setName(target.value);
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
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

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
      <div className={styles.login_button}>
        <Button type="primary" size="large">
          {" "}
          Зарегистрироваться{" "}
        </Button>
      </div>
      <p className={styles.login_paragraph}>
        Уже зарегестрированы? <Link to="/login">Войти</Link>{" "}
      </p>
    </form>
  );
};

export default Register;
