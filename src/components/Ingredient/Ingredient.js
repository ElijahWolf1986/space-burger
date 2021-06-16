import React from "react";
import styles from "./Ingredient.module.css";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { getSelectedIngredient } from "../../services/actions";

Ingredient.propTypes = {
  item: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  _id: PropTypes.string,
  onIngredientClick: PropTypes.func,
};

function Ingredient(item) {
  const location = useLocation();
  const dispatch = useDispatch();
  const ingredient = item;
  const [{ isDrag }, dragRef] = useDrag({
    type: "dragIngredient",
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleClick = () => {
    dispatch(getSelectedIngredient(ingredient));
  };
  return (
    !isDrag && (
      <Link
        className={styles.ingredient_link}
        to={{
          pathname: `/ingredients/${ingredient._id}`,
          state: { backgroundIngredient: location },
        }}
      >
        <section
          className={styles.ingredient}
          onClick={handleClick}
          ref={dragRef}
        >
          <Counter count={ingredient.count} size="small" />
          <img src={ingredient.image} alt={ingredient.name} />

          <div className={styles.ingredient_price}>
            <p className={styles.ingredient_price_value}>{ingredient.price}</p>
            <CurrencyIcon />
          </div>
          <p className={styles.ingredient_name}>{ingredient.name}</p>
        </section>
      </Link>
    )
  );
}

export default Ingredient;
