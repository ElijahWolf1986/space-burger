import React from "react";
import styles from "./Feed.module.css";
import Order from "../../components/Order/Order";
import Data from "../../utils/data";
import { Link } from "react-router-dom";

function Feed() {
  const ReadyOrders = Data.filter((item) => item.status === "Выполнен");
  const WorkOrders = Data.filter((item) => item.status === "Готовится");

  return (
    <section className={styles.feed}>
      <h1 className={styles.feed_title}>Лента заказов</h1>
      <div className={styles.feed_orders}>
        <ul className={styles.feed_orders_list}>
          {Data.map((item, index) => {
            return (
              <li className={styles.feed_order} key={index}>
                <Link to={{ pathname: `/feed/${item.number}` }}>
                  <Order order={item} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.feed_orders_summury}>
          <div className={styles.feed_orders_status}>
            <div className={styles.feed_orders_ready}>
              <p className={styles.feed_orders_title}>Готовы:</p>
              <ul className={styles.feed_list}>
                {ReadyOrders.map((item, index) => {
                  return (
                    <li className={styles.feed_orders_ready_item} key={index}>
                      {item.number}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.feed_orders_work}>
              <p className={styles.feed_orders_title}>В работе:</p>

              <ul className={styles.feed_list}>
                {WorkOrders.map((item, index) => {
                  return (
                    <li className={styles.feed_orders_work_item} key={index}>
                      {item.number}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.order_count}>
            <p className={styles.feed_orders_title}>Выполнено за все время:</p>
            <p className={styles.feed_orders_count}>28 752</p>
          </div>
          <div className={styles.order_count}>
            <p className={styles.feed_orders_title}>Выполнено за сегодня:</p>
            <p className={styles.feed_orders_count}>138</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feed;
