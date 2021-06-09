import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

function Input(props) {
  const { placeholder, type, value, handleChange, isRequired } = props;
  return (
    <section className={styles.input_container}>
      <label className={styles.input_label}>{value ? "" : placeholder}</label>
      <input
        type={type}
        value={value || ""}
        onChange={handleChange}
        required={isRequired}
        className={styles.input}
      />
    </section>
  );
}

export default Input;
 