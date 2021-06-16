import React from "react";
import styles from "./BurgerConstructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import { useHistory } from "react-router-dom";

import {
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrder,
  addClientIngredient,
  showError,
} from "../../services/actions";
import hungry from "../../images/hungry.png";
import { useDrop } from "react-dnd";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isToken = localStorage.getItem("refreshToken");
  const { clientIngredients, whatIsBun } = useSelector((store) => ({
    clientIngredients: store.client.clientIngredients,
    whatIsBun: store.client.whatIsBun,
  }));
  const [{ isHover }, dropTarget] = useDrop({
    accept: "dragIngredient",
    drop(ingredient) {
      dispatch(addClientIngredient(ingredient));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  //Временная конструкция для обработки входных данных по ингредиентам
  let totalPrice = 0;
  const orderIdArr = [...clientIngredients];
  if (clientIngredients && !whatIsBun) {
    totalPrice = clientIngredients.reduce(function (prevValue, item) {
      return prevValue + item.price;
    }, 0);
  }
  if (clientIngredients && whatIsBun) {
    totalPrice =
      clientIngredients.reduce(function (prevValue, item) {
        return prevValue + item.price;
      }, 0) +
      whatIsBun.price * 2;
    orderIdArr.push(whatIsBun._id, whatIsBun._id);
  }
  //******************* */

  const handleGetOrder = () => {
    if (whatIsBun && isToken) {
      dispatch(getOrder(orderIdArr));
    }
    if (!whatIsBun && isToken) {
      dispatch(
        showError({
          status: "Положи-ка булочку в заказ дружок - с ней будет веселее!)",
        })
      );
    }
    if ((whatIsBun && !isToken) || (!whatIsBun && !isToken)) {
      history.push("/login");
    }
  };

  return (
    <section className={`${styles.constructor}`} ref={dropTarget}>
      <div
        className={`${styles.constructor_client} ${
          (clientIngredients.length || whatIsBun) &&
          styles.constructor_client_active
        } ${isHover && styles.constructor_hover}`}
      >
        {whatIsBun && <ConstructorItem {...whatIsBun} bunLock bunLock_top />}
        {/* Тут отрисовываем ингредиенты внутри списка */}
        <div className={styles.constructor_ingredients}>
          <ul className={styles.constructor_list}>
            {clientIngredients.map((item, index) => {
              return (
                <li className={styles.constructor_item} key={item.ingredientId}>
                  {" "}
                  <div className={`${styles.dragicon} mb-1`}>
                    {" "}
                    <DragIcon />{" "}
                  </div>
                  <ConstructorItem {...item} index={index} />{" "}
                </li>
              );
            })}
          </ul>
        </div>
        {whatIsBun && <ConstructorItem {...whatIsBun} bunLock bunLock_bottom />}
        <div className={styles.constructor_total}>
          {/* Тут подсчитываем и выводим общую стоимость заказа */}
          <p className={styles.constructor_count}> {totalPrice} </p>
          <div className={styles.constructor_currency_icon}>
            <CurrencyIcon type="primary" />
          </div>
          {/* Этот див временный пока не починять кнопку в библиотеке */}
          <div onClick={handleGetOrder}>
            <Button type="primary" size="large">
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.constructor_hungry} ${
          !clientIngredients.length &&
          !whatIsBun &&
          styles.constructor_hungry_active
        } ${isHover && styles.constructor_hover}`}
      >
        <p className={styles.constructor_hungry_paragraph}>
          {" "}
          Хочешь оформить заказ?{" "}
        </p>
        <p className={styles.constructor_hungry_paragraph}>
          {" "}
          Положи в меня еду! ){" "}
        </p>
        <img
          className={styles.constructor_hungry_img}
          src={hungry}
          alt="hungry smile"
        />
      </div>
    </section>
  );
}

export default BurgerConstructor;
