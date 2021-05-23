import React from "react";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
const element = document.getElementById("modal");

function IngredientDetails() {
  const { currentIngredient } = useSelector((store) => ({
    currentIngredient: store.burgerIngredient.currentIngredient,
  }));
  return ReactDOM.createPortal(
    <Modal isModal={currentIngredient} header="Детали Ингредиента">
      <div className={styles.ingredient_container}>
        <img
          src={currentIngredient ? currentIngredient.image : "#"}
          alt={currentIngredient ? currentIngredient.name : ""}
          className={styles.ingredient_image}
        />
        <p className={styles.ingredient_title}>
          {currentIngredient ? currentIngredient.name : ""}
        </p>
        {/* <p className={styles.ingredient_alias}>{currentIngredient ? currentIngredient.alias : ''}</p> тут будет описание когда бэк его начнет выдавать */}
        <ul className={styles.ingredient_list}>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Калории, ккал</p>
            <p className={styles.ingredient_consist_value}>
              {currentIngredient ? currentIngredient.calories : ""}
            </p>
          </li>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Белки, г</p>
            <p className={styles.ingredient_consist_value}>
              {currentIngredient ? currentIngredient.proteins : ""}
            </p>
          </li>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Жиры, г</p>
            <p className={styles.ingredient_consist_value}>
              {currentIngredient ? currentIngredient.fat : ""}
            </p>
          </li>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Углеводы, г</p>
            <p className={styles.ingredient_consist_value}>
              {currentIngredient ? currentIngredient.carbohydrates : ""}
            </p>
          </li>
        </ul>
      </div>
    </Modal>,
    element
  );
}

export default IngredientDetails;
