import React from "react";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

Modal.propTypes = {
  onClose: PropTypes.func,
  isModal: PropTypes.object,
  header: PropTypes.string,
  children: PropTypes.object,
};

function Modal(props) {
  return (
    <section
      className={`${styles.modal} ${props.isModal && styles.modal_active}`}
    >
      <ModalOverlay onClose={props.onClose} />
      <div className={styles.modal_container}>
        <header className={`${styles.modal_header} m-5`}>
          <h3 className={styles.modal_title}>{props.header}</h3>
          <button className={styles.modal_close_icon} onClick={props.onClose}>
            {" "}
          </button>
        </header>
        <div id="test">{props.children}</div>
      </div>
    </section>
  );
}

export default Modal;
