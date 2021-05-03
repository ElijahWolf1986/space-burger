import React from "react";

import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import IngredientsApi from "../../Api";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { URL, ORDER } from "../../utils/Utils";


function App() {
  const [isTooglePopup, setIsTooglePopup] = React.useState(false);
  const [isModal, setIsModal] = React.useState(false);
  const [isTooglePopupPersonal, setIsTooglePopupPersonal] = React.useState(
    false
  );
  const [ingredientsList, setIngredientsList] = React.useState([]);
  const [errApi, setErrApi] = React.useState({});
  const [selectedIngredient, setSelectedIngredient] = React.useState();
  const [order, setOrder] = React.useState();

  const ingredientsApi = new IngredientsApi(URL);

  function handleToogleMenu() {
    // Меню для мобильных устройств
    setIsTooglePopup(true);
  }

  function handleToogleMenuPersonal() {
    //Меню личного кабинета для мобильных устройств
    setIsTooglePopupPersonal(!isTooglePopupPersonal);
  }

  function handleClickCreateOrder() {
    setOrder(ORDER);
  }

  function closeAllPopups() {
    //Закрываем все всплывающие окна
    setIsTooglePopup(false);
    setIsTooglePopupPersonal(false);
    setIsModal(false);
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
        <BurgerConstructor ingredientsList={ingredientsList} createOrder={handleClickCreateOrder} />
      </section>

      <IngredientDetails
        onClose={closeAllPopups}
        ingredient={selectedIngredient}
      />
        <OrderDetails
        onClose={closeAllPopups}
        order={order}
        />  

      <ErrorPopup onClose={closeAllPopups} err={errApi} />
    </>
  );
}

export default App;
