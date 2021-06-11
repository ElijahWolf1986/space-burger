import React from "react";
import styles from "./Profile.module.css";
import Input from "../../components/Input/Input";
import ProfileMenu from "./ProfileMenu";

function Profile() {
  const [name, setName] = React.useState("Иван");
  const [email, setEmail] = React.useState("Invan@mail.ru");
  const [password, setPassword] = React.useState("password");

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
    <section className={styles.profile_container}>
      <ProfileMenu />
      <div className={styles.profile_data}>
        <Input
          type="text"
          isRequired
          placeholder="Имя"
          value={name}
          handleChange={changeName}
          custom
        />
        <Input
          type="email"
          isRequired
          placeholder="E-mail"
          value={email}
          handleChange={changeEmail}
          custom
        />
        <Input
          type="password"
          isRequired
          placeholder="Пароль"
          value={password}
          handleChange={changePassword}
          custom
        />
      </div>
    </section>
  );
}

export default Profile;
