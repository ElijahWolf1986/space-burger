import React from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
}

function ModalOverlay(props) {
  return <div className={styles.overlay} onClick={props.onClose}></div>;
}

export default ModalOverlay;
