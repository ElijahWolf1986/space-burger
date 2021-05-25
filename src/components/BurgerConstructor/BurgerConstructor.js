import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./BurgerConstructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, addClientIngredient } from "../../services/actions";
import hungry from "../../images/hungry.png";
import { useDrop } from "react-dnd";

function BurgerConstructor() {
  const dispatch = useDispatch();
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
  
//   const moveCard = () => {
//  return console.log('hi')
//   }

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
                <li className={styles.constructor_item} key={uuidv4()}>
                  {" "}
                  <div className={`${styles.dragicon} mb-1`}>
                    {" "}
                    <DragIcon />{" "}
                  </div>
                  <ConstructorItem {...item} 
                  index={index}
                  //  moveCard={moveCard}
                   />{" "}
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
          <div onClick={() => dispatch(getOrder(orderIdArr))}>
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
