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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
      <DndProvider backend={HTML5Backend}>
      <section id="main" className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
      </DndProvider>
      <IngredientDetails />
      <OrderDetails />
      <ErrorPopup />
    </>
  );
}

export default App;
