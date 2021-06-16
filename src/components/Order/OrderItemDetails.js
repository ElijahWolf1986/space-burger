import React from "react";
import Modal from "../Modal/Modal";
import ReactDOM from "react-dom";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
import styles from "./Order.module.css";
const element = document.getElementById("modal");

function OrderItemDetails() {
  const { currentOrder } = useSelector((store) => ({
    currentOrder: store.order.currentOrder,
  }));

  return ReactDOM.createPortal(
    <Modal isModal={currentOrder} type="goBack" header="Детали заказа">
      <section className={styles.order_container}>
        <OrderItem />
      </section>
    </Modal>,
    element
  );
}

export default OrderItemDetails;
