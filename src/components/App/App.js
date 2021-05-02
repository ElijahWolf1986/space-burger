import React from "react";

import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  const [isTooglePopup, setIsTooglePopup] = React.useState(false);
  const [isTooglePopupPersonal, setIsTooglePopupPersonal] = React.useState(
    false
  );

  function handleToogleMenu() {
    setIsTooglePopup(true);
  }

  function handleToogleMenuPersonal() {
    setIsTooglePopupPersonal(!isTooglePopupPersonal);
  }

  function closeAllPopups() {
    setIsTooglePopup(false);
    setIsTooglePopupPersonal(false);
  }

  return (
    <>
      <AppHeader
        isTooglePopup={isTooglePopup}
        isTooglePopupPersonal={isTooglePopupPersonal}
        closeAllPopups={closeAllPopups}
        handleToogleMenu={handleToogleMenu}
        handleToogleMenuPersonal={handleToogleMenuPersonal}
      />
      <section id="main" className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </>
  );
}

export default App;
