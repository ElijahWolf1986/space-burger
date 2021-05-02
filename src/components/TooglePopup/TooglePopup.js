import React from "react";
import styles from "./TooglePopup.module.css";
import {
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function TooglePopup(props) {
  return (
    <section className={styles.popup}>
      <header className={styles.popup_header}>
        <p className={`${styles.popup_title} text text_type_main-defaul`} t>
          Меню
        </p>
        <button
          className={styles.popup_close_icon}
          onClick={props.closeAllPopups}
        >
          {" "}
        </button>
      </header>
      <menu className={styles.popup_menu}>
        <ul className={styles.popup_menu_list}>
          <div className={styles.popup_menu_personal}>
            <li className={styles.popup_menu_item}>
              <ProfileIcon type="primary" />
              <p
                className={`${styles.popup_menu_title} ${styles.popup_menu_title_state_active}`}
              >
                Личный кабинет
              </p>
            </li>
            <button
              className={`${styles.popup_menu_personal_throw} ${props.isTooglePopupPersonal ? styles.popup_menu_personal_throw_state_opened : styles.popup_menu_personal_throw_state_closed}`}
              onClick={props.handleToogleMenuPersonal}
            ></button>
          </div>
          {props.isTooglePopupPersonal && (
            <ul className={styles.popup_menu_personal_list}>
              <li
                className={`${styles.popup_menu_personal_item} ${styles.popup_menu_personal_item_state_active}`}
              >
                Профиль
              </li>
              <li className={styles.popup_menu_personal_item}>
                История заказов
              </li>
              <li className={styles.popup_menu_personal_item}>Выход</li>
            </ul>
          )}
          <li className={styles.popup_menu_item}>
            <BurgerIcon type="secondary" />
            <p className={styles.popup_menu_title}>Конструктор бургеров</p>
          </li>
          <li className={styles.popup_menu_item}>
            <ListIcon type="secondary" />
            <p className={styles.popup_menu_title}>Лента заказов</p>
          </li>
        </ul>
      </menu>
    </section>
  );
}

export default TooglePopup;
