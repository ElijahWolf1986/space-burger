import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import IngredientsApi from "../../utils/Api";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { urlIngredients, urlOrder } from "../../utils/Utils";
import {
  BurgerIngredientsContext,
  orderContext,
} from "../../contexts/burgerContext";

function App() {
  const [isTooglePopup, setIsTooglePopup] = React.useState(false);
  const [isTooglePopupPersonal, setIsTooglePopupPersonal] =
    React.useState(false);
  const [ingredientsList, setIngredientsList] = React.useState([]);
  const [errApi, setErrApi] = React.useState({});
  const [selectedIngredient, setSelectedIngredient] = React.useState();
  const [order, setOrder] = React.useState();
  const ingredientsApi = new IngredientsApi(urlIngredients);
  const orderApi = new IngredientsApi(urlOrder);

  function closeByEsc(evt) {
    if (evt.keyCode === 27) {
      closeAllPopups();
    }
  }

  function handleToogleMenu() {
    // Меню для мобильных устройств
    setIsTooglePopup(true);
  }

  function handleToogleMenuPersonal() {
    //Меню личного кабинета для мобильных устройств
    setIsTooglePopupPersonal(!isTooglePopupPersonal);
  }

  function handleClickCreateOrder(ingredients) {
    orderApi
      .getOrder(ingredients)
      .then((res) => {
        setOrder(res);
        setErrApi({});
      })
      .catch((err) => {
        setErrApi(err);
      });
  }

  function closeAllPopups() {
    //Закрываем все всплывающие окна
    setIsTooglePopup(false);
    setIsTooglePopupPersonal(false);
    setErrApi({});
    setSelectedIngredient(undefined);
    setOrder(undefined);
  }

  function handleIngredientClick(selectedIngredient) {
    //Открытие деталей ингредиента
    setSelectedIngredient(selectedIngredient);
  }

  React.useEffect(() => {
    ingredientsApi // Получаем данные с сервера
      .getIngredientList()
      .then((res) => {
        setIngredientsList(res.data);
        setErrApi({});
      })
      .catch((err) => {
        setErrApi(err); //Записываем нашу ошибку, что бы вывести пользователю через ErrorPopup
      });
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", closeByEsc, false);
    return () => {
      document.removeEventListener("keydown", closeByEsc, false);
    };
  }, []);

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
        <BurgerIngredients
          ingredientsList={ingredientsList}
          selectedIngredient={handleIngredientClick}
        />

        <BurgerIngredientsContext.Provider value={ingredientsList}>
          <BurgerConstructor createOrder={handleClickCreateOrder} />
        </BurgerIngredientsContext.Provider>
      </section>
      <IngredientDetails
        onClose={closeAllPopups}
        ingredient={selectedIngredient}
      />
      <orderContext.Provider value={order}>
        <OrderDetails onClose={closeAllPopups} />
      </orderContext.Provider>

      <ErrorPopup onClose={closeAllPopups} err={errApi} />
    </>
  );
}

export default App;
