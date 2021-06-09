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
import { Link } from "react-router-dom";

function AppHeader() {
  const dispatch = useDispatch();
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
                <BurgerIcon type="primary" />
                <p className={`${styles.menu_title}`}>Конструктор</p>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link to="/feed">
                <ListIcon type="secondary" />
                <p
                  className={`${styles.menu_title} ${styles.menu_title_active}`}
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
        <a href="localhost:3000" className={styles.logo_mobile}>
          {" "}
        </a>
        <button
          id="toogle-menu"
          className={styles.toogle_menu}
          onClick={openMenu}
        >
          {" "}
        </button>

        {isTooglePopup && <TooglePopup />}

        <div className={styles.profile}>
          <ProfileIcon type="secondary" />
          <p
            className={`${styles.profile_title} ${styles.profile_title_active}`}
          >
            Личный кабинет
          </p>
        </div>
      </header>
    </section>
  );
}

export default AppHeader;
