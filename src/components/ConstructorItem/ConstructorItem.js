import React from "react";

import {
  CurrencyIcon,
  LockIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ConstructorItem.module.css";

function ConstructorItem(props) {
  return (
    <section
      className={`${styles.container} p-2 ${
        props.type === "bun" && styles.container_bun
      }`} 
    >
      <div
        className={`${styles.container_ingredient_info} ${
          props.in_stock === "false" && styles.container_ingredient_info_empty
        }`}
      >
        {props.in_stock === "true" && (
          <div className={styles.container_drag_icon}>
            <DragIcon />
          </div>
        )}
        <img
          className={styles.container_ingredient_image}
          src={props.image}
          alt={props.name}
        />
        <p className={styles.container_ingredient_name}>{props.name}</p>
      </div>

      <div className={styles.container_ingredient_price}>
        <p className={styles.container_ingredient_price_value}>{props.price}</p>
        <CurrencyIcon />
        {props.in_stock === "true" ? (
          <button className={styles.container_button_delete}></button>
        ) : (
          <div className={styles.container_lock_icon}>
            <LockIcon type="primary" />
          </div>
        )}
      </div>
    </section>
  );
}

export default ConstructorItem;
