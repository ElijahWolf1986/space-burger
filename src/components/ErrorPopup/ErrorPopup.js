import React from "react";
import styles from "./ErrorPopup.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

ErrorPopup.propTypes = {
  onClose: PropTypes.func,
  status: PropTypes.string,
  statusText: PropTypes.string,
};

function ErrorPopup(props) {
  //Компонент вывода ошибки в случае ее возникновения при работе с api

  return (
    <section
      className={`${styles.err_popup} ${
        props.err.status && styles.err_popup_active
      }`}
    >
      <ModalOverlay onClose={props.onClose} />
      <div className={styles.err_popup_container}>
        <button className={styles.err_popup_close_icon} onClick={props.onClose}>
          {" "}
        </button>
        <h2 className={styles.err_popup_title}>
          {" "}
          Произошла ошибка при общении с сервером:{" "}
        </h2>
        <p className={styles.err_popup_paragraph}>
          Статус ответа: {props.err.status} {props.err.statusText}
        </p>
      </div>
    </section>
  );
}

export default ErrorPopup;
