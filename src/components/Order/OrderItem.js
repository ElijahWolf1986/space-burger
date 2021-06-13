import React from "react";
import styles from "./Order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import data from "../../utils/data";
import { update } from "../../utils/func";
import { optionsDate } from "../../utils/constants";

function OrderItem() {
  const { id } = useParams();
  const order = data.filter(({ number }) => {
    return number === JSON.parse(id);
  })[0];
  const orderDate = update(order.date, optionsDate);

  return (
    <section className={styles.order_item}>
      <p className={styles.order_number}>#{order.number}</p>
      <p className={styles.order_item_name}>{order.name}</p>
      <p
        className={`${styles.order_status} ${
          order.status === "Выполнен" && styles.order_status_finished
        } ${order.status === "Отменен" && styles.order_status_cancelled}`}
      >
        {order.status}
      </p>
      <p className={styles.order_title}>Состав:</p>
      <div className={styles.order_ingredients_container}>
        {order &&
          order.data.map((item, index) => {
            return (
              <div className={styles.order_ingredient_item} key={index}>
                <div className={styles.order_ingredient_container}>
                  <img
                    className={`${styles.order_ingredient_img}`}
                    src={item.image_mobile}
                    alt={item.name}
                  />
                  <p className={styles.order_ingredient_name}>{item.name}</p>
                </div>
                <div className={styles.order_price_container}>
                  <p className={styles.order_price}>1 x {item.price}</p>
                  <CurrencyIcon />
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.order_total}>
        <p className={styles.order_date}>{orderDate}</p>
        <div className={styles.order_price_container}>
          <p className={styles.order_price}>{order.price}</p>
          <CurrencyIcon />
        </div>
      </div>
    </section>
  );
}

export default OrderItem;
