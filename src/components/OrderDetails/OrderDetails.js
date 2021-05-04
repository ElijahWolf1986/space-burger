import React from "react";
import styles from "./OrderDetails.module.css";
import Modal from "../Modal/Modal";
import successIcon from "../../images/OrderDetails/success_icon.png";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

OrderDetails.propTypes = {
  onClose: PropTypes.func,
  order: PropTypes.object,
  number: PropTypes.number,
};
const element = document.getElementById("root");

function OrderDetails(props) {
  return ReactDOM.createPortal(
    <Modal onClose={props.onClose} isModal={props.order}>
      <div className={styles.order_container}>
        <p className={styles.order_number}>
          {props.order ? props.order.number : ""}
        </p>
        <p className={styles.order_title}>Идентификатор заказа</p>
        <img
          src={successIcon}
          alt="ура, готовка началась"
          className={styles.order_success_icon}
        />
        <p className={styles.order_success}>Ваш заказ начали готовить</p>
        <p className={styles.order_info}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>,
    element
  );
}

export default OrderDetails;
