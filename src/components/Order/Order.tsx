import React from "react";
import styles from "./Order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { update } from "../../utils/func";
import { optionsDate } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedOrder } from "../../services/actions";
import { RootState } from "../../services/store";
import { TIngredient, TOrder } from "../../services/actions/actionTypes";

type TOrderProps = {
  order: TOrder;
};

function Order(props: TOrderProps) {
  const order: TOrder = props.order;
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store: RootState) => ({
    ingredients: store.burgerIngredients.ingredients,
  }));
  const handleClick = () => {
    dispatch(getSelectedOrder(order));
  };
  const orderIngredientsId = order.ingredients;
  const orderIngredients: any = orderIngredientsId.map((id: string) =>
    ingredients.find((item: TIngredient) => item._id === id)
  );
  const orderPrice =
    orderIngredients &&
    orderIngredients.reduce(function (prevValue: number, item: TIngredient) {
      return prevValue + item.price;
    }, 0);
  const orderDate = update(order.createdAt, optionsDate);

  return (
    <section className={styles.order} onClick={handleClick}>
      <div className={styles.order_header}>
        <p className={styles.order_number}>#{order.number}</p>
        <p className={styles.order_date}>{orderDate}</p>
      </div>
      <p className={styles.order_name}>{order.name}</p>
      <p
        className={`${styles.order_status} ${
          order.status === "done" && styles.order_status_finished
        } ${order.status === "pending" && styles.order_status_cancelled}`}
      >
        {order.status === "done" ? "Выполнен" : "Готовится"}
      </p>
      <div className={styles.order_ingredients}>
        <div className={styles.order_img_container}>
          {orderIngredients.map((item: TIngredient, index: number) => {
            return (
              <img
                className={`${styles.order_img}`}
                src={item.image_mobile}
                alt={item.name}
                key={index}
                style={{ zIndex: Math.abs(index - 100) }}
              />
            );
          })}
        </div>
        <div className={styles.order_price_container}>
          <p className={styles.order_price}>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}

export default Order;
