import React from "react";
import styles from "./Profile.module.css";
import Input from "../../components/Input/Input";
import ProfileMenu from "./ProfileMenu";
import { useSelector, useDispatch } from "react-redux";
import { getCookie } from "../../utils/func";
import { getUserInfo, logout } from "../../services/actions";

function Profile() {
  const { userName, userEmail } = useSelector((store) => ({
    userName: store.user.user.name,
    userEmail: store.user.user.email,
  }));

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const changeName = (evt) => {
    setName(evt.target.value);
  };

  const changeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const changePassword = (evt) => {
    setPassword(evt.target.value);
  };

  React.useEffect(() => {
    dispatch(getUserInfo());
    setName(userName);
    setEmail(userEmail);
  }, [userName, userEmail]);

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
