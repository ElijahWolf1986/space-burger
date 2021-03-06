import React from "react";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { addClientIngredient, closeAllPopups } from "../../services/actions";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { RootState } from "../../services/store";

const element: HTMLElement | null = document.getElementById("modal");

const IngredientDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { currentIngredient } = useSelector((store: RootState) => ({
    currentIngredient: store.burgerIngredient.currentIngredient,
  }));
  function handleAddIngredient() {
    if (currentIngredient) {
      dispatch(addClientIngredient(currentIngredient));
      dispatch(closeAllPopups(currentIngredient));
    }
  }
  const isModal = currentIngredient ? true : false;
  return (
    element &&
    ReactDOM.createPortal(
      <Modal isModal={isModal} header="Детали Ингредиента" type="goBack">
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
          <div
            className={styles.ingredient_button}
            onClick={handleAddIngredient}
          >
            <Button type="primary" size="large">
              Добавить в заказ
            </Button>
          </div>
        </div>
      </Modal>,
      element
    )
  );
};

export default IngredientDetails;
