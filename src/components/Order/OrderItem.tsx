import React from "react";
import styles from "./Order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { update } from "../../utils/func";
import { optionsDate } from "../../utils/constants";
import IngredientsApi from "../../utils/Api";
import { urlApi } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions";
import Preloader from "../Preloader/Preloader";
import { showError } from "../../services/actions";
import { RootState } from "../../services/store";
import { TIngredient, TOrder } from "../../services/actions/actionTypes";

function OrderItem() {
  const dispatch = useDispatch();
  const burgerApi = new IngredientsApi(urlApi);
  const [order, setOrder] = React.useState<TOrder>();
  const { id } = useParams<{ id?: string }>();
  const { ingredients } = useSelector((store: RootState) => ({
    ingredients: store.burgerIngredients.ingredients,
  }));
  const orderIngredients: any =
    ingredients &&
    order &&
    order.ingredients.map((id: string) =>
      ingredients.find((item: TIngredient) => item._id === id)
    );
  const orderDate = order && update(order.createdAt, optionsDate);
  const orderPrice=
    orderIngredients &&
    ingredients &&
    orderIngredients.reduce(function (prevValue: number, item: TIngredient) {
      return prevValue + item.price;
    }, 0);

  React.useEffect(() => {
    dispatch(getIngredients());
    burgerApi
      .getCurrentOrder(id)
      .then((res) => {
        setOrder(res.orders[0]);
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
      });
  }, []);

  return order ? (
    <section className={styles.order_item}>
      <p className={styles.order_number}>#{order.number}</p>
      <p className={styles.order_item_name}>{order.name}</p>
      <p
        className={`${styles.order_status} ${
          order.status === "Выполнен" && styles.order_status_finished
        } ${order.status === "Отменен" && styles.order_status_cancelled}`}
      >
        {order.status === "done" ? "Выполнен" : "Готовится"}
      </p>
      <p className={styles.order_title}>Состав:</p>
      <div className={styles.order_ingredients_container}>
        {order &&
          orderIngredients &&
          orderIngredients.map((item: TIngredient, index: number) => {
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
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.order_total}>
        <p className={styles.order_date}>{orderDate}</p>
        <div className={styles.order_price_container}>
          <p className={styles.order_price}>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  ) : (
    <Preloader />
  );
}

export default OrderItem;
