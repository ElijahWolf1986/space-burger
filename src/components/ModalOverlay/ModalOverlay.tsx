import React from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

type TPropTypes = {
  onClose: () => void;
};

function ModalOverlay(props: TPropTypes) {
  return <div className={styles.overlay} onClick={props.onClose}></div>;
}

export default ModalOverlay;
