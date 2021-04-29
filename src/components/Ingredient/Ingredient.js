import React from "react";
import styles from "./Ingredient.module.css";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { isPropertySignature } from "typescript";

function Ingredient() {
  return (
    <section className={styles.ingredient}>
        <Counter count={1} size="default" />
      {/* <img src={props.image} alt={props.name} />
            <p className={styles.ingredient_price}>
                {props.price}
                
            </p>
            <p className={styles.ingredient_name}>{props.name}</p> */}

      <img
        src="https://code.s3.yandex.net/react/code/bun-02.png"
        alt="Краторная булка N-200i"
      />
      <p className={styles.ingredient_price}>
        1255
        <CurrencyIcon />
      </p>
      <p className={styles.ingredient_name}>"Краторная булка N-200i"</p>

    </section>
  );
}

export default Ingredient;
