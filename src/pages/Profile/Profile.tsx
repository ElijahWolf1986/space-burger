import React, { ChangeEvent, FormEvent } from "react";
import styles from "./Profile.module.css";
import Input from "../../components/Input/Input";
import ProfileMenu from "./ProfileMenu";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, updateUserInfo } from "../../services/actions";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { RootState } from "../../services/store";

function Profile() {
  const { userName, userEmail } = useSelector((store: RootState) => ({
    userName: store.user.user.name,
    userEmail: store.user.user.email,
  }));
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

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

  const onSaveNewUserData = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(updateUserInfo(name, email, password));
  };
  const handleCancel = () => {
    setName(userName);
    setEmail(userEmail);
  };

  React.useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  React.useEffect(() => {
    setName(userName);
    setEmail(userEmail);
  }, [userName, userEmail]);

  return (
    <section className={styles.profile_container} onSubmit={onSaveNewUserData}>
      <ProfileMenu />
      <form className={styles.profile_data} noValidate>
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
        <div className={styles.profile_button_container}>
          <div className={styles.profile_button}>
            <Button type="primary" size="large">
              {" "}
              Сохранить{" "}
            </Button>
          </div>
          <div className={styles.profile_button} onClick={handleCancel}>
            <Button type="primary" size="large">
              {" "}
              Отмена{" "}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Profile;
