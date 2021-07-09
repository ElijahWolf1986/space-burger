import React from "react";
import styles from "./OrderDetails.module.css";
import Modal from "../Modal/Modal";
import successIcon from "../../images/OrderDetails/success_icon.png";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

OrderDetails.propTypes = {
  onClose: PropTypes.func,
};
const element: HTMLElement | null = document.getElementById("modal");

function OrderDetails() {
  const { order } = useSelector((store: RootState) => ({
    order: store.order.order,
  }));
  const orderNumber = order && order.order.number;
  const isModal = order ? true : false;
  return (
    element &&
    ReactDOM.createPortal(
      <Modal isModal={isModal} type="order">
        <div className={styles.order_container}>
          <p className={styles.order_number}>{order ? orderNumber : ""}</p>
          <p className={styles.order_title}>Идентификатор заказа</p>
          <img
            src={successIcon}
            alt="ура, готовка началась"
            className={styles.order_success_icon}
          />
          <p className={styles.order_success}>Ваш заказ начали готовить</p>
          <p className={styles.order_alias}>{order ? order.name : ""}</p>
          <p className={styles.order_info}>
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </Modal>,
      element
    )
  );
}

export default OrderDetails;
