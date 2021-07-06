import React from "react";
import styles from "./IngredientDetails.module.css";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { addClientIngredient, closeAllPopups } from "../../services/actions";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getIngredients } from "../../services/actions";
import { useParams, useHistory } from "react-router-dom";

type TItem = {
  image: string;
  name: string;
  price: number;
  _id: string;
  count: number;
};

const element: HTMLElement | null = document.getElementById("modal");

function IngredientDetailsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { ingredients } = useSelector((store: any) => ({
    ingredients: store.burgerIngredients.ingredients,
  }));

  const currentIngredient = ingredients.filter(({ _id }: TItem) => {
    return _id === id;
  })[0];

  function handleAddIngredient() {
    dispatch(addClientIngredient(currentIngredient));
    dispatch(closeAllPopups(currentIngredient));
    history.push("/");
  }

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);
  return element && ReactDOM.createPortal(
    <section className={styles.ingredient_section}>
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
        <div className={styles.ingredient_button} onClick={handleAddIngredient}>
          <Button type="primary" size="large">
            Добавить в заказ
          </Button>
        </div>
      </div>
    </section>,
    element 
  );
}

export default IngredientDetailsPage;
