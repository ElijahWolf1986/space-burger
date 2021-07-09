import React from "react";
import styles from "./TooglePopup.module.css";
import {
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import {
  showPersonalMenu,
  hidePersonalMenu,
  closeAllPopups,
} from "../../services/actions";
import { RootState } from "../../services/store";

const TooglePopup: React.FC = () => {
  const dispatch = useDispatch();
  const { isTooglePopup, isTooglePersonal } = useSelector(
    (store: RootState) => ({
      isTooglePopup: store.menu.isTooglePopup,
      isTooglePersonal: store.menu.isTooglePersonal,
    })
  );
  function onClose() {
    if (isTooglePopup) {
      dispatch(closeAllPopups());
    }
  }
  function onTooglePersonalMenu() {
    if (isTooglePersonal) {
      dispatch(hidePersonalMenu());
    } else {
      dispatch(showPersonalMenu());
    }
  }

  return (
    <section className={styles.popup}>
      <header className={styles.popup_header}>
        <p className={`${styles.popup_title} text text_type_main-defaul`}>
          Меню
        </p>
        <button className={styles.popup_close_icon} onClick={onClose}>
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
              className={`${styles.popup_menu_personal_throw} ${
                isTooglePersonal
                  ? styles.popup_menu_personal_throw_state_opened
                  : styles.popup_menu_personal_throw_state_closed
              }`}
              onClick={onTooglePersonalMenu}
            ></button>
          </div>
          {isTooglePersonal && (
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
};

export default TooglePopup;
