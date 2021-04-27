import React from "react";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>

      <menu className={styles.menu}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <BurgerIcon type="primary" />
            <p className={`${styles.menu_title} text text_type_main-default`}>Конструктор</p>
          </li>
          <li className={styles.menu_item}>
            <ListIcon type="secondary" />
            <p className={`${styles.menu_title} ${styles.menu_title_active} text text_type_main-default`}>Лента заказов</p>
          </li>
        </ul>
        <Logo />
      </menu>

      {/* <Logo /> */}

      <profile className={styles.profile}>
      <ProfileIcon type="secondary" />
      <p className={`${styles.profile_title} ${styles.profile_title_active} text text_type_main-default`}>Личный кабинет</p>
      </profile>

      
    </header>
  );
}

export default AppHeader;
