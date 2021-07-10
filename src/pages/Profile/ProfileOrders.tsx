import React from "react";
import styles from "./Profile.module.css";
import ProfileMenu from "./ProfileMenu";
import Preloader from "../../components/Preloader/Preloader";
import Order from "../../components/Order/Order";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions";
import { wsActions } from "../../services/store";
import { getCookie } from "../../utils/func";
import { RootState } from "../../services/store";
import { TOrder } from "../../services/actions/actionTypes";

const ProfileOrders: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = getCookie("token"); 

  const { dataOrders, wsConnected } = useSelector((store: RootState) => ({
    dataOrders: store.ws.Data,
    wsConnected: store.ws.wsConnected,
  }));
  const data = dataOrders && dataOrders.orders;

  React.useEffect(() => {
    dispatch(getIngredients());
    dispatch({
      type: wsActions.wsStart,
      payload: `wss://norma.nomoreparties.space/orders?token=${token}`,
    });
    return () => {
      dispatch({ type: wsActions.wsClose });
    };
  }, [dispatch]);

  return wsConnected && data ? (
    <section className={styles.profile_orders_container}>
      <div className={styles.profile_orders_menu}>
        <ProfileMenu />
      </div>
      <div className={styles.profile_orders}>
        <ul className={styles.profile_orders_list}>
          {data.map((item: TOrder, index: number) => {
            return (
              <li className={styles.profile_order} key={index}>
                <Link
                  to={{
                    pathname: `/profile/orders/${item.number}`,
                    state: { backgroundOrder: location },
                  }}
                >
                  <Order order={item} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  ) : (
    <Preloader />
  );
}

export default ProfileOrders;
