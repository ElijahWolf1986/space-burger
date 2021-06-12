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
  const dispatch = useDispatch();
  const location = useLocation();
  function openMenu() {
    dispatch(showMenu());
  }
  const { isTooglePopup } = useSelector((store) => ({
    isTooglePopup: store.menu.isTooglePopup,
  }));

  return (
    <section className={styles.header_section}>
      <header className={styles.header}>
        <menu className={styles.menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link to="/constructor">
                <BurgerIcon
                  type={
                    location.pathname === "/constructor"
                      ? "primary"
                      : "secondary"
                  }
                />
                <p
                  className={`${styles.menu_title} ${
                    location.pathname === "/constructor" &&
                    styles.menu_title_active
                  }`}
                >
                  Конструктор
                </p>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link to="/feed">
                <ListIcon
                  type={location.pathname === "/feed" ? "primary" : "secondary"}
                />
                <p
                  className={`${styles.menu_title} ${
                    location.pathname === "/feed" && styles.menu_title_active
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
                location.pathname === "/profile" ||
                location.pathname === "/profile/orders"
                  ? "primary"
                  : "secondary"
              }
            />
            <p
              className={`${styles.profile_title} ${
                (location.pathname === "/profile" ||
                  location.pathname === "/profile/orders") &&
                styles.profile_title_active
              }`}
            >
              Личный кабинет
            </p>
          </div>
        </Link>
      </header>
    </section>
  );
}

export default AppHeader;
