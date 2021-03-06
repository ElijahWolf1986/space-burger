import React, { useMemo, FC } from "react";
import styles from "./BurgerIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions";
import { TIngredient } from "../../services/actions/actionTypes";
import { RootState } from "../../services/store";

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const bunBlock: HTMLElement | null = document.getElementById("bun");
  const sauceBlock: HTMLElement | null = document.getElementById("sauce");
  const fillingBlock: HTMLElement | null = document.getElementById("filling");
  const topBlock: HTMLElement | null = document.getElementById("ingredients");
  const [current, setCurrent] = React.useState("one");
  const { ingredients, clientIngredients, whatIsBun } = useSelector(
    (store: RootState) => ({
      ingredients: store.burgerIngredients.ingredients,
      clientIngredients: store.client.clientIngredients,
      whatIsBun: store.client.whatIsBun,
    })
  );

  const ingredientsWithCount = useMemo(() => {
    return ingredients.map((ingredient: TIngredient) => {
      ingredient.count = clientIngredients.filter(
        (item: TIngredient) => item._id === ingredient._id
      ).length;
      if (whatIsBun && whatIsBun._id === ingredient._id) ingredient.count += 2;
      return ingredient;
    });
  }, [ingredients, clientIngredients, whatIsBun]);

  const onScrollIngredients = () => {
    const bunBlockPosition =
      bunBlock &&
      topBlock &&
      Math.abs(
        bunBlock.getBoundingClientRect().top -
          topBlock.getBoundingClientRect().top
      );
    const sauceBlockPosition =
      sauceBlock &&
      topBlock &&
      Math.abs(
        sauceBlock.getBoundingClientRect().top -
          topBlock.getBoundingClientRect().top
      );
    const fillingBlockPosition =
      fillingBlock &&
      topBlock &&
      Math.abs(
        fillingBlock.getBoundingClientRect().top -
          topBlock.getBoundingClientRect().top
      );

    if (
      bunBlockPosition &&
      sauceBlockPosition &&
      fillingBlockPosition &&
      bunBlockPosition < sauceBlockPosition &&
      bunBlockPosition < fillingBlockPosition
    ) {
      setCurrent("one");
    }
    if (
      bunBlockPosition &&
      sauceBlockPosition &&
      fillingBlockPosition &&
      sauceBlockPosition < bunBlockPosition &&
      sauceBlockPosition < fillingBlockPosition
    ) {
      setCurrent("two");
    }
    if (
      bunBlockPosition &&
      sauceBlockPosition &&
      fillingBlockPosition &&
      fillingBlockPosition < bunBlockPosition &&
      fillingBlockPosition < sauceBlockPosition
    ) {
      setCurrent("three");
    }
  };

  // ???????????????????? ???????????????????????? ???? ??????????????
  const bunArr = ingredientsWithCount.filter((item: TIngredient) => {
    return item.type === "bun";
  });
  const sauceArr = ingredientsWithCount.filter((item: TIngredient) => {
    return item.type === "sauce";
  });
  const fillingArr = ingredientsWithCount.filter((item: TIngredient) => {
    return item.type === "main";
  });
  //   ************************************

  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <section id="BurgerIngredients" className={styles.burger}>
      <h1 className={styles.burger_header}>???????????????? ????????????</h1>
      {/* ???????? ?????????????????????? */}
      <menu className={styles.burger_menu}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => {
            bunBlock &&
              bunBlock.scrollIntoView({ block: "start", behavior: "smooth" });
            setCurrent("one");
          }}
        >
          ??????????
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => {
            sauceBlock &&
              sauceBlock.scrollIntoView({ block: "start", behavior: "smooth" });
            setCurrent("two");
          }}
        >
          ??????????
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => {
            fillingBlock &&
              fillingBlock.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
            setCurrent("three");
          }}
        >
          ??????????????
        </Tab>
      </menu>
      {/* *************** */}
      <section
        id="ingredients"
        className={styles.ingredients}
        onScroll={onScrollIngredients}
      >
        {/* ?????????????????????? ?????????? */}
        <div id="bun" className={styles.ingredients_bun}>
          <p className={styles.ingredients_title}>??????????</p>
          <div className={styles.ingredients_list}>
            {bunArr.map((item: TIngredient): JSX.Element => {
              return <Ingredient key={item._id} {...item} />;
            })}
          </div>
        </div>
        {/* ?????????????????????? ???????????? */}
        <div id="sauce" className={styles.ingredients_sauce}>
          <p className={styles.ingredients_title}>??????????</p>
          <div className={styles.ingredients_list}>
            {sauceArr.map((item: TIngredient) => {
              return <Ingredient key={item._id} {...item} />;
            })}
          </div>
        </div>
        {/* ?????????????????????? ?????????????? */}
        <div id="filling" className={styles.ingredients_filling}>
          <p className={styles.ingredients_title}>??????????????</p>
          <div className={styles.ingredients_list}>
            {fillingArr.map((item: TIngredient) => {
              return <Ingredient key={item._id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BurgerIngredients;
