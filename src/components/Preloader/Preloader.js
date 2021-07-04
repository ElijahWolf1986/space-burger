import React from "react";
import styles from "./Preloader.module.css";

function Preloader() {
  return (
    <div
      className={`${styles.preloader} 
            ${styles.preloader_state_active}`}>
      <i className={styles.circle_preloader}></i>
      <p className={styles.preloader__paragraph}>Идет загрузка...</p>
    </div>
  );
}

export default Preloader;
