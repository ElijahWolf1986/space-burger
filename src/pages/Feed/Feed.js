import React from "react";
import styles from "./Feed.module.css";
import Preloader from "../../components/Preloader/Preloader";
import Order from "../../components/Order/Order";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions";
import { wsActions } from "../../services/store";

function Feed() {
  const dispatch = useDispatch();
  const { dataOrders, wsConnected } = useSelector((store) => ({
    dataOrders: store.ws.Data,
    wsConnected: store.ws.wsConnected,
  }));
  const location = useLocation();

  React.useEffect(() => {
    dispatch(getIngredients());
    dispatch({
      type: wsActions.wsStart,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });
    return () => dispatch({ type: wsActions.wsClose });
  }, []);

  const data = dataOrders && dataOrders.data && dataOrders.data.orders;
  const ReadyOrders = data && data.filter((item) => item.status === "done");
  const WorkOrders = data && data.filter((item) => item.status === "pending");

  return wsConnected && data ? (
    <section className={styles.feed}>
      <h1 className={styles.feed_title}>Лента заказов</h1>
      <div className={styles.feed_orders}>
        <ul className={styles.feed_orders_list}>
          {data.map((item) => {
            return (
              <li className={styles.feed_order} key={item._id}>
                <Link
                  to={{
                    pathname: `/feed/${item.number}`,
                    state: { backgroundOrder: location },
                  }}
                >
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
                  if (index < 10) {
                    return (
                      <li
                        className={styles.feed_orders_ready_item}
                        key={item._id}
                      >
                        {item.number}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className={styles.feed_orders_ready}>
              <p className={styles.feed_orders_title}>Готовы:</p>
              <ul className={styles.feed_list}>
                {ReadyOrders.map((item, index) => {
                  if (index > 9 && index < 20) {
                    return (
                      <li
                        className={styles.feed_orders_ready_item}
                        key={item._id}
                      >
                        {item.number}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className={styles.feed_orders_work}>
              <p className={styles.feed_orders_title}>В работе:</p>
              <ul className={styles.feed_list}>
                {WorkOrders.map((item, index) => {
                  if (index > 10) {
                    return;
                  }
                  return (
                    <li className={styles.feed_orders_work_item} key={item._id}>
                      {item.number}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.order_count}>
            <p className={styles.feed_orders_title}>Выполнено за все время:</p>
            <p className={styles.feed_orders_count}>
              {dataOrders.data ? dataOrders.data.total : "none"}
            </p>
          </div>
          <div className={styles.order_count}>
            <p className={styles.feed_orders_title}>Выполнено за сегодня:</p>
            <p className={styles.feed_orders_count}>
              {dataOrders.data ? dataOrders.data.totalToday : "none"}
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Preloader />
  );
}

export default React.memo(Feed);
