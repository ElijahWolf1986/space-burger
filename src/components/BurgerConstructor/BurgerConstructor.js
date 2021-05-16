import React from "react";
import styles from "./BurgerConstructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { BurgerIngredientsContext } from "../../contexts/burgerContext";

BurgerConstructor.propTypes = {
  createOrder: PropTypes.func,
};

function BurgerConstructor(props) {
  const ingredientsList = React.useContext(BurgerIngredientsContext);

  // отбираем все ингредиенты кроме булочек, так как они устанавливаюся в меню отдельно в вех и низ
  const ingredArr = ingredientsList.filter((item) => {
    return item.type !== "bun";
  });
  const whatIsBun = ingredientsList.find((item) => {
    return item.type === "bun";
  });

  //Временная конструкция для обработки входных данных по ингредиентам
  let totalPrice = 0;
  let orderIdArr = [];
  if (ingredArr && whatIsBun) {
    totalPrice =
      ingredArr.reduce(function (prevValue, item) {
        return prevValue + item.price;
      }, 0) +
      whatIsBun.price * 2;
    orderIdArr = ingredArr.map((item) => {
      return item._id;
    });
    orderIdArr.push(whatIsBun._id, whatIsBun._id);
  }

  //******************* */

  const handleSubmit = () => {
    //поднятая функция для работы с api
    props.createOrder(orderIdArr);
  };

  return (
    <section className={styles.constructor}>
      <ConstructorItem {...whatIsBun} bunLock bunLock_top />
      {/* Тут отрисовываем ингредиенты внутри списка */}
      <div className={styles.constructor_ingredients}>
        <ul className={styles.constructor_list}>
          {ingredArr.map((item) => {
            return (
              <li className={styles.constructor_item} key={item._id}>
                {" "}
                <div className={`${styles.dragicon} mb-1`}>
                  {" "}
                  <DragIcon />{" "}
                </div>
                <ConstructorItem {...item} />{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <ConstructorItem {...whatIsBun} bunLock bunLock_bottom />
      <div className={styles.constructor_total}>
        {/* Тут подсчитываем и выводим общую стоимость заказа */}
        <p className={styles.constructor_count}> {totalPrice} </p>
        <div className={styles.constructor_currency_icon}>
          <CurrencyIcon type="primary" />
        </div>
        {/* Этот див временный пока не починять кнопку в библиотеке */}
        <div onClick={handleSubmit}>
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
