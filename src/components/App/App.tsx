import React, { FC } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import IngredientDetailsPage from "../IngredientDetails/IngredientDetailPage";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderItemDetails from "../Order/OrderItemDetails";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
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

type TLocation = {
  state: {
    backgroundIngredient: any;
    backgroundOrder: any;
  };
};

const App: FC = () => {
  const history = useHistory();
  let location: TLocation = useLocation();
  const action = history.action === "PUSH" || history.action === "REPLACE";
  let backgroundIngredient =
    action && location.state && location.state.backgroundIngredient;
  let backgroundOrder =
    action && location.state && location.state.backgroundOrder;

  return (
    <Router history={history}>
      <AppHeader />

      <Switch location={backgroundIngredient || backgroundOrder || location}>
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
        <Route exact path="/ingredients/:id">
          <IngredientDetailsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>

      {backgroundIngredient && (
        <Route exact path="/ingredients/:id">
          <IngredientDetails />
        </Route>
      )}
      {backgroundOrder && (
        <ProtectedRoute exact path="/profile/orders/:id">
          <OrderItemDetails />
        </ProtectedRoute>
      )}
      {backgroundOrder && (
        <Route exact path="/feed/:id">
          <OrderItemDetails />
        </Route>
      )}

      <OrderDetails />
      <ErrorPopup />
    </Router>
  );
};

export default App;
