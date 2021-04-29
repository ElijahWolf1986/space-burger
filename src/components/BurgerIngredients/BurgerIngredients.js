import React from "react";
// import { useHistory, Link, useLocation } from "react-router-dom";
import styles from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Data from "../../utils/data";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one"); 

  //   const history = useHistory(); // Была попытка организовть якорную ссылку, но ничего не вышло ()
  //   const turnToFilling = () => {
  //     history.push("#filling");
  //     setCurrent("three");
  //   };
  // const {name, fat, price} = Data;

//   отбор захардкоренных данных
  const bunArr = Data.filter((item) => {
    return item.type === "bun";
  });
  const sauceArr = Data.filter((item) => {
    return item.type === "sauce";
  });
  const fillingArr = Data.filter((item) => {
    return item.type === "main";
  });
//   ************************************

  return (
    <section id="BurgerIngredients" className={styles.burger}>
      <h1 className={styles.burger_header}>Соберите бургер</h1>
      {/* Меню ингредиетов */}
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
      {/* *************** */}
      <section className={styles.ingredients}>
        {/* Отображение булок */}
        <div id="bun" className={styles.ingredients_bun}>
          <p className={styles.ingredients_title}>Булки</p>
          <div className={styles.ingredients_list}>
            {bunArr.map((item) => {
              return (
                <Ingredient
                  image={item.image}
                  name={item.name}
                  price={item.price}
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
                <Ingredient {...item}
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
                  image={item.image}
                  name={item.name}
                  price={item.price}
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
