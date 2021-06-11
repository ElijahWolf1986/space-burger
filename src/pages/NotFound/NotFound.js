import React from "react";
import styles from "./NotFound.module.css";
import NotFoundPic from "../../images/not-found-ico.svg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function NotFound() {
  return (
    <section className={styles.notfound_container}>
      <img src={NotFoundPic} alt="not found" />
      <h2 className={styles.notfound_title}>Ничего не найдено</h2>
      <p className={styles.notfound_paragraph}>
        К сожалению такая страница не найдена
      </p>
      <Link to="/">
        {" "}
        <Button type="primary" size="large">
          {" "}
          Вернуться на главную{" "}
        </Button>
      </Link>
    </section>
  );
}

export default NotFound;
