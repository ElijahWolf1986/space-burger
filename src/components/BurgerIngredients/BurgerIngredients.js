import React from "react";
import styles from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");

  return (
    <section id="BurgerIngredients" className={styles.burger}>
      <h1 className={styles.burger_header}>Соберите бургер</h1>
      <menu className={styles.burger_menu}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </menu>
      <section className={styles.ingredients}>

        <Ingredient />

      </section>
    </section>
  );
}

export default BurgerIngredients;
