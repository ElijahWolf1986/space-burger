import React from "react";
import styles from "./ModalOverlay.module.css";

function ModalOverlay(props) {
  return <div className={styles.overlay} onClick={props.onClose}></div>;
}

export default ModalOverlay;
