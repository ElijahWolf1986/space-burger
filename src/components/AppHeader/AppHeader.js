import React from "react";
import TooglePopup from "../TooglePopup/TooglePopup";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { showMenu } from "../../services/actions";
import { Link, useLocation } from "react-router-dom";

function AppHeader() {
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  function openMenu() {
    dispatch(showMenu());
  }
  const { isTooglePopup } = useSelector((store) => ({
    isTooglePopup: store.menu.isTooglePopup,
  }));

  React.useEffect(() => {
    const currentUserName = localStorage.getItem("userName");
    setUserName(currentUserName);
  });

  return (
    <section className={styles.header_section}>
      <header className={styles.header}>
        <menu className={styles.menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link id='main' to="/">
                <BurgerIcon
                  type={location.pathname === "/" ? "primary" : "secondary"}
                />
                <p
                  className={`${styles.menu_title} ${
                    location.pathname === "/" && styles.menu_title_active
                  }`}
                >
                  Конструктор
                </p>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link id='feed' to="/feed">
                <ListIcon
                  type={
                    location.pathname.indexOf("/feed") >= 0
                      ? "primary"
                      : "secondary"
                  }
                />
                <p
                  className={`${styles.menu_title} ${
                    location.pathname.indexOf("/feed") >= 0 &&
                    styles.menu_title_active
                  }`}
                >
                  Лента заказов
                </p>
              </Link>
            </li>
          </ul>
        </menu>

        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <button
          id="toogle-menu"
          className={styles.toogle_menu}
          onClick={openMenu}
        >
          {" "}
        </button>
        {isTooglePopup && <TooglePopup />}
        <Link to="/profile">
          <div className={styles.profile}>
            <ProfileIcon
              type={
                location.pathname.indexOf("/profile") >= 0
                  ? "primary"
                  : "secondary"
              }
            />
            <p
              className={`${styles.profile_title} ${
                location.pathname.indexOf("/profile") >= 0 &&
                styles.profile_title_active
              }`}
            >
              {userName ? userName : "Личный кабинет"}
            </p>
          </div>
        </Link>
      </header>
    </section>
  );
}

export default AppHeader;
