import React from "react";
import styles from "./Ingredient.module.css";
import { useDrag } from "react-dnd";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { getSelectedIngredient } from "../../services/actions";

Ingredient.propTypes = {
  ingredient: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  onIngredientClick: PropTypes.func,
};

function Ingredient(props) {
  const dispatch = useDispatch();
  const ingredient = props.ingredient;
  const [{isDrag}, dragRef] = useDrag({
    type: "dragIngredient",
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging()
  })
  });

  const handleClick = () => {
    dispatch(getSelectedIngredient(ingredient));
  };
  return ( !isDrag && 
    <section className={styles.ingredient} onClick={handleClick} ref={dragRef}>
      <Counter count={props.count} size="small" />
      <img src={props.image} alt={props.name} />

      <div className={styles.ingredient_price}>
        <p className={styles.ingredient_price_value}>{props.price}</p>
        <CurrencyIcon />
      </div>
      <p className={styles.ingredient_name}>{props.name}</p>
    </section> 
  );
}

export default Ingredient;
