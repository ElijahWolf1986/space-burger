import React from "react";
import styles from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

BurgerIngredients.propTypes = {
  ingredientsList: PropTypes.array,
  selectedIngredient: PropTypes.func,
};

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("one");

  function viewComponentFilling() {
    document
      .getElementById("filling")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent("three");
  }
  function viewComponentSauce() {
    document
      .getElementById("sauce")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent("two");
  }
  function viewComponentBun() {
    document
      .getElementById("bun")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent("one");
  }

  //   отбор захардкоренных данных
  const bunArr = props.ingredientsList.filter((item) => {
    return item.type === "bun";
  });
  const sauceArr = props.ingredientsList.filter((item) => {
    return item.type === "sauce";
  });
  const fillingArr = props.ingredientsList.filter((item) => {
    return item.type === "main";
  });
  //   ************************************

  return (
    <section id="BurgerIngredients" className={styles.burger}>
      <h1 className={styles.burger_header}>Соберите бургер</h1>
      {/* Меню ингредиетов */}
      <menu className={styles.burger_menu}>
        <Tab value="one" active={current === "one"} onClick={viewComponentBun}>
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={viewComponentSauce}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={viewComponentFilling}
        >
          Начинки
        </Tab>
      </menu>
      {/* *************** */}
      <section className={styles.ingredients}>
        {/* Отображение булок */}
        <div id="bun" className={styles.ingredients_bun}>
          <p className={styles.ingredients_title}>Булки</p>
          <div className={styles.ingredients_list}>
            {bunArr.map((item, index) => {
              return (
                <Ingredient
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onIngredientClick={props.selectedIngredient}
                  ingredient={item}
                />
              );
            })}
          </div>
        </div>
        {/* Отображение Соусов */}
        <div id="sauce" className={styles.ingredients_sauce}>
          <p className={styles.ingredients_title}>Соусы</p>
          <div className={styles.ingredients_list}>
            {sauceArr.map((item) => {
              return (
                <Ingredient
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onIngredientClick={props.selectedIngredient}
                  ingredient={item}
                />
              );
            })}
          </div>
        </div>
        {/* Отображение Начинок */}
        <div id="filling" className={styles.ingredients_filling}>
          <p className={styles.ingredients_title}>Начинки</p>
          <div className={styles.ingredients_list}>
            {fillingArr.map((item) => {
              return (
                <Ingredient
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onIngredientClick={props.selectedIngredient}
                  ingredient={item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

export default BurgerIngredients;
