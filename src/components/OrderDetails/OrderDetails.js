import React from "react";
import styles from "./OrderDetails.module.css";
import Modal from "../Modal/Modal";
import successIcon from "../../images/OrderDetails/success_icon.png";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { orderContext } from "../../contexts/burgerContext";

OrderDetails.propTypes = {
  onClose: PropTypes.func,
};
const element = document.getElementById("modal");

function OrderDetails(props) {
  const order = React.useContext(orderContext);
  return ReactDOM.createPortal(
    <Modal onClose={props.onClose} isModal={order}>
      <div className={styles.order_container}>
        <p className={styles.order_number}>{order ? order.order.number : ""}</p>
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
