import React from "react";
import styles from "./ErrorPopup.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups } from "../../services/actions";

function ErrorPopup() {
  const { error } = useSelector((store) => ({
    error: store.errors.error,
  }));
  const dispatch = useDispatch();
  function onClose() {
    dispatch(closeAllPopups());
  }
  return (
    <section
      className={`${styles.err_popup} ${
        error.status && styles.err_popup_active
      }`}
    >
      <ModalOverlay onClose={onClose} />
      <div className={styles.err_popup_container}>
        <button className={styles.err_popup_close_icon} onClick={onClose}>
          {" "}
        </button>
        <h2 className={styles.err_popup_title}>
          {" "}
          Произошла ошибка при общении с сервером:{" "}
        </h2>
        <p className={styles.err_popup_paragraph}>
          Статус ответа: {error.status} {error.statusText}
        </p>
      </div>
    </section>
  );
}

export default ErrorPopup;
