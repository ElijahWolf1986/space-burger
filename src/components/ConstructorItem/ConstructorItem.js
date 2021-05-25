import React from "react";

import {
  CurrencyIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { removeClientIngredient } from "../../services/actions";

import styles from "./ConstructorItem.module.css";
import PropTypes from "prop-types";

ConstructorItem.propTypes = {
  bunLock: PropTypes.bool,
  bunLock_top: PropTypes.bool,
  bunLock_bottom: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

function ConstructorItem(props) {
  const dispatch = useDispatch();

  // function handleDeleteIngredient() {
  //   dispatch(removeClientIngredient(props.ingredientId));
  //   // console.log(props)
  //   // console.log(props.ingredientId)


  // }

  return (
    <section
      className={`${styles.container} p-2 ${
        props.bunLock_top !== undefined && styles.container_bun_top
      } ${props.bunLock_bottom !== undefined && styles.container_bun_bottom}`}
    >
      <div className={`${styles.container_ingredient_info}`}>
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
        {props.bunLock === undefined ? (
          <button
            className={styles.container_button_delete}
            onClick={() =>  {
              dispatch(removeClientIngredient(props.ingredientId))
            }}
          ></button>
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
