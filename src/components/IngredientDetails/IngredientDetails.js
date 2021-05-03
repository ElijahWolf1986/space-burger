import React from "react";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

IngredientDetails.propTypes = {
  onClose: PropTypes.func,
  ingredient: PropTypes.object,
  name: PropTypes.string,
  calories: PropTypes.string,
  proteins: PropTypes.string,
  fat: PropTypes.string,
  carbohydrates: PropTypes.string,
};

function IngredientDetails(props) {
  return (
    <Modal
      onClose={props.onClose}
      isModal={props.ingredient}
      header="Детали Ингредиента"
    >
      <div className={styles.ingredient_container}>
        <img
          src={props.ingredient ? props.ingredient.image : "#"}
          alt={props.ingredient ? props.ingredient.name : ""}
          className={styles.ingredient_image}
        />
        <p className={styles.ingredient_title}>
          {props.ingredient ? props.ingredient.name : ""}
        </p>
        {/* <p className={styles.ingredient_alias}>{props.ingredient.alias}</p> тут будет описание когда бэк его начнет выдавать */}
        <ul className={styles.ingredient_list}>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Калории, ккал</p>
            <p className={styles.ingredient_consist_value}>
              {props.ingredient ? props.ingredient.calories : ""}
            </p>
          </li>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Белки, г</p>
            <p className={styles.ingredient_consist_value}>
              {props.ingredient ? props.ingredient.proteins : ""}
            </p>
          </li>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Жиры, г</p>
            <p className={styles.ingredient_consist_value}>
              {props.ingredient ? props.ingredient.fat : ""}
            </p>
          </li>
          <li className={styles.ingredient_item}>
            <p className={styles.ingredient_consist_name}>Углеводы, г</p>
            <p className={styles.ingredient_consist_value}>
              {props.ingredient ? props.ingredient.carbohydrates : ""}
            </p>
          </li>
        </ul>
      </div>
    </Modal>
  );
}

export default IngredientDetails;
