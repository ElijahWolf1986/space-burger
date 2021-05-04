import React from "react";
import TooglePopup from "../TooglePopup/TooglePopup";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

AppHeader.propTypes = {
  handleToogleMenu: PropTypes.func,
  isTooglePopup: PropTypes.bool,
  closeAllPopups: PropTypes.func,
  isTooglePopupPersonal: PropTypes.bool,
  handleToogleMenuPersonal: PropTypes.func,
};

function AppHeader(props) {
  return (
    <section className={styles.header_section}>
      <header className={styles.header}>
        <menu className={styles.menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <BurgerIcon type="primary" />
              <p className={`${styles.menu_title}`}>Конструктор</p>
            </li>
            <li className={styles.menu_item}>
              <ListIcon type="secondary" />
              <p className={`${styles.menu_title} ${styles.menu_title_active}`}>
                Лента заказов
              </p>
            </li>
          </ul>
        </menu>

        <a href="localhost:3000" className={styles.logo}>
          <Logo />
        </a>
        <a href="localhost:3000" className={styles.logo_mobile}>
          {" "}
        </a>
        <button
          id="toogle-menu"
          className={styles.toogle_menu}
          onClick={props.handleToogleMenu}
        >
          {" "}
        </button>

        {props.isTooglePopup && (
          <TooglePopup
            closeAllPopups={props.closeAllPopups}
            isTooglePopupPersonal={props.isTooglePopupPersonal}
            handleToogleMenuPersonal={props.handleToogleMenuPersonal}
          />
        )}

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
