import React from "react";
import styles from "./Input.module.css";
import { TInput } from "../../services/actions/actionTypes";

function Input(props: TInput) {
  const { placeholder, type, value, handleChange, isRequired, custom } = props;
  const [typeInput, setTypeInput] = React.useState(type);

  const onEyeClick = () => {
    if (typeInput === "password") {
      setTypeInput("show-password");
    } else {
      setTypeInput("password");
    }
  };

  const customInput = !custom ? (
    <>
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
    </>
  ) : (
    <>
      <label className={styles.input_profile_label}>{placeholder}</label>
      <input
        type={typeInput}
        value={value || ""}
        onChange={handleChange}
        required={isRequired}
        className={`${styles.input} ${styles.input_profile}`}
      />

      {(typeInput === "password" && value) ||
      (typeInput === "show-password" && value) ? (
        <div className={styles.input_eye} onClick={onEyeClick}></div>
      ) : (
        <div className={styles.input_pencil}></div>
      )}
    </>
  );

  return <section className={styles.input_container}>{customInput}</section>;
}

export default Input;
