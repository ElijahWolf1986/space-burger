import React from "react";

import styles from "./BurgerConstructor.module.css";
import Data from "../../utils/data";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  // отбираем все ингредиенты кроме булочек, так как они устанавливаюся в меню отдельно в вех и низ
  const ingredArr = Data.filter((item) => {
    return item.type !== "bun";
  });
  const whatIsBun = Data.find((item) => {
    return item.type === "bun";
  });

  const total = 610;

  return (
    <section className={styles.constructor}>
      <div
        className={`${styles.constructor_bun} ${styles.constructor_bun_top}`}
      >
        <ConstructorItem {...whatIsBun} />
      </div>

      {/* Тут отрисовываем ингредиенты внутри списка */}
      <div className={styles.constructor_ingredients}>
        <ul className={styles.constructor_list}>
          {ingredArr.map((item) => {
            return (
              <li className={styles.constructor_item} key={item._id}>
                {" "}
                <ConstructorItem {...item} />{" "}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${styles.constructor_bun} ${styles.constructor_bun_bottom}`}
      >
        <ConstructorItem {...whatIsBun} />
      </div>

      <div className={styles.constructor_total}>
        {/* Тут подсчитываем и выводим общую стоимость заказа */}
        <p className={styles.constructor_count}> {total} </p>
        <div className={styles.constructor_currency_icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
