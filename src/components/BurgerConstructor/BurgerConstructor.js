import React from "react";

import styles from "./BurgerConstructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  // отбираем все ингредиенты кроме булочек, так как они устанавливаюся в меню отдельно в вех и низ
  const bunLock = true;
  const ingredArr = props.ingredientsList.filter((item) => {
    return item.type !== "bun";
  });
  const whatIsBun = props.ingredientsList.find((item) => {
    return item.type === "bun";
  });

  const total = 610;

  return (
    <section className={styles.constructor}>

      <div
        className={`${styles.constructor_bun} ${styles.constructor_bun_top}`}

      >

        <ConstructorItem {...whatIsBun} bunLock={bunLock} />
        
       
        
      </div>
      
      
      {/* Тут отрисовываем ингредиенты внутри списка */}
      <div className={styles.constructor_ingredients}>
          
        <ul className={styles.constructor_list}>

          {ingredArr.map((item) => {
            return (
              <li className={styles.constructor_item} key={item._id}>
                {" "}
                <div className={`${styles.dragicon} mb-1`}> <DragIcon /> </div>
                
                <ConstructorItem {...item} />{" "}
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div
        className={`${styles.constructor_bun} ${styles.constructor_bun_bottom}`}
      >
        <ConstructorItem {...whatIsBun} bunLock={bunLock} />
      </div> */}

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
