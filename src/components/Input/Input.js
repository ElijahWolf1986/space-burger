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
  const [typeInput, setTypeInput] = React.useState(type);

  const onEyeClick = () => {
    if (typeInput === "password") {
      setTypeInput("show-password");
    } else {
      setTypeInput("password");
    }
  };

  return (
    <section className={styles.input_container}>
      <label className={styles.input_label}>{value ? "" : placeholder}</label>
      <input
        type={typeInput}
        value={value || ""}
        onChange={handleChange}
        required={isRequired}
        className={styles.input}
      />
      {((typeInput === "password" && value) ||
        (typeInput === "show-password" && value)) && (
        <div className={styles.input_eye} onClick={onEyeClick}></div>
      )}
    </section>
  );
}

export default Input;
