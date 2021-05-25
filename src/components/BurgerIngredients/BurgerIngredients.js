import React, { useMemo } from "react";
import styles from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

function BurgerIngredients() {
  const bunBlock = document.getElementById("bun");
  const sauceBlock = document.getElementById("sauce");
  const fillingBlock = document.getElementById("filling");
  const topBlock = document.getElementById("ingredients");
  const [current, setCurrent] = React.useState("one");
  const { ingredients, clientIngredients, whatIsBun } = useSelector(
    (store) => ({
      ingredients: store.burgerIngredients.ingredients,
      clientIngredients: store.client.clientIngredients,
      whatIsBun: store.client.whatIsBun,
    })
  );

  const ingredientsWithCount = useMemo(() => {
    return ingredients.map((ingredient) => {
      ingredient.count = clientIngredients.filter(
        (item) => item._id === ingredient._id
      ).length;
      if (whatIsBun && whatIsBun._id === ingredient._id) ingredient.count += 2;
      return ingredient;
    });
  }, [ingredients, clientIngredients, whatIsBun]);

  function viewComponentFilling() {
    fillingBlock.scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent("three");
  }
  function viewComponentSauce() {
    sauceBlock.scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent("two");
  }
  function viewComponentBun() {
    bunBlock.scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent("one");
  }

  function onScrollIngredients() {
    const bunBlockPosition = Math.abs(
      bunBlock.getBoundingClientRect().top -
        topBlock.getBoundingClientRect().top
    );
    const sauceBlockPosition = Math.abs(
      sauceBlock.getBoundingClientRect().top -
        topBlock.getBoundingClientRect().top
    );
    const fillingBlockPosition = Math.abs(
      fillingBlock.getBoundingClientRect().top -
        topBlock.getBoundingClientRect().top
    );

    if (
      bunBlockPosition < sauceBlockPosition &&
      bunBlockPosition < fillingBlockPosition
    ) {
      setCurrent("one");
    }
    if (
      sauceBlockPosition < bunBlockPosition &&
      sauceBlockPosition < fillingBlockPosition
    ) {
      setCurrent("two");
    }
    if (
      fillingBlockPosition < bunBlockPosition &&
      fillingBlockPosition < sauceBlockPosition
    ) {
      setCurrent("three");
    }
  }

  // Сортировка ингредиентов по группам
  const bunArr = ingredientsWithCount.filter((item) => {
    return item.type === "bun";
  });
  const sauceArr = ingredientsWithCount.filter((item) => {
    return item.type === "sauce";
  });
  const fillingArr = ingredientsWithCount.filter((item) => {
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
      <section
        id="ingredients"
        className={styles.ingredients}
        onScroll={onScrollIngredients}
      >
        {/* Отображение булок */}
        <div id="bun" className={styles.ingredients_bun}>
          <p className={styles.ingredients_title}>Булки</p>
          <div className={styles.ingredients_list}>
            {bunArr.map((item) => {
              return (
                <Ingredient
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  ingredient={item}
                  count={item.count}
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
                  ingredient={item}
                  count={item.count}
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
                  ingredient={item}
                  count={item.count}
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
