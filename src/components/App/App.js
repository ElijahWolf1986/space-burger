import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch } from "react-redux";
import { getIngredients, closeAllPopups } from "../../services/actions";

function App() {
  const dispatch = useDispatch();
  function closeByEsc(evt) {
    if (evt.keyCode === 27) {
      dispatch(closeAllPopups());
    }
  }

  React.useEffect(() => {
    dispatch(getIngredients());
    document.addEventListener("keydown", closeByEsc, false);
    return () => {
      document.removeEventListener("keydown", closeByEsc, false);
    };
  }, []);

  return (
    <>
      <AppHeader />
      <section id="main" className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
      <IngredientDetails />
      <OrderDetails />
      <ErrorPopup />
    </>
  );
}

export default App;
