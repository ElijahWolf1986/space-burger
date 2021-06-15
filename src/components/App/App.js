import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch } from "react-redux";
import { closeAllPopups } from "../../services/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Feed,
  Profile,
  ProfileOrders,
  NotFound,
} from "../../pages";
import OrderItem from "../Order/OrderItem";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    function closeByEsc(evt) {
      if (evt.keyCode === 27) {
        dispatch(closeAllPopups());
      }
    }
    document.addEventListener("keydown", closeByEsc, false);
    return () => {
      document.removeEventListener("keydown", closeByEsc, false);
    };
  }, []);

  return (
    <Router history={history}>
      <AppHeader />

      <Switch>
        <Route exact path="/">
          <DndProvider backend={HTML5Backend}>
            <section id="main" className={styles.main}>
              <BurgerIngredients />
              <BurgerConstructor />
            </section>
          </DndProvider>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registration">
          <Register />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/feed/:id">
          <OrderItem />
        </Route>
        <ProtectedRoute exact path="/profile">
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders">
          <ProfileOrders />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile/orders/:id">
          <OrderItem />
        </ProtectedRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>

      <IngredientDetails />
      <OrderDetails />
      <ErrorPopup />
    </Router>
  );
}

export default App;
