import React from "react";
import styles from "./Profile.module.css";
import { Link, useLocation } from "react-router-dom";

function ProfileMenu() {
  let location = useLocation();

  return (
    <div className={styles.profile_menu}>
      <ul className={styles.profile_menu_list}>
        <Link to="/profile">
          <li
            className={`${styles.profile_menu_item} ${
              location.pathname === "/profile" &&
              styles.profile_menu_item_active
            }`}
          >
            Профиль
          </li>
        </Link>
        <Link to="/profile/orders">
          <li
            className={`${styles.profile_menu_item} ${
              location.pathname === "/profile/orders" &&
              styles.profile_menu_item_active
            }`}
          >
            История заказов
          </li>
        </Link>
        <li className={styles.profile_menu_item}>Выход</li>
      </ul>
      <p className={styles.profile_info}>
        В этом разделе вы можете &nbsp; изменить свои персональные данные
      </p>
    </div>
  );
}

export default ProfileMenu;
