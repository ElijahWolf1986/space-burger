import React from "react";
import styles from "./Order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { update } from "../../utils/func";
import { optionsDate } from "../../utils/constants";


Order.propTypes = {
  order: PropTypes.object,
  date: PropTypes.number,
  number: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
};

function Order(props) {
  const orderDate = update(props.order.date, optionsDate);
  return (
    <section className={styles.order}>
      <div className={styles.order_header}>
        <p className={styles.order_number}>#{props.order.number}</p>
        <p className={styles.order_date}>{orderDate}</p>
      </div>
      <p className={styles.order_name}>{props.order.name}</p>
      <p
        className={`${styles.order_status} ${
          props.order.status === "Выполнен" && styles.order_status_finished
        } ${props.order.status === "Отменен" && styles.order_status_cancelled}`}
      >
        {props.order.status}
      </p>
      <div className={styles.order_ingredients}>
        <div className={styles.order_img_container}>
          {props.order.data.map((item, index) => {
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
          <p className={styles.order_price}>{props.order.price}</p>
          <CurrencyIcon />
        </div>
      </div>
    </section>
  );
}

export default Order;
