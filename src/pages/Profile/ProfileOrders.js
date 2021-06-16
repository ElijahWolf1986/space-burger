import React from "react";
import styles from "./Profile.module.css";
import ProfileMenu from "./ProfileMenu";
import Order from "../../components/Order/Order";
import data from "../../utils/data";
import { Link, useLocation } from "react-router-dom";

function ProfileOrders() {
  const location = useLocation();

  return (
    <section className={styles.profile_orders_container}>
      <div className={styles.profile_orders_menu}>
        <ProfileMenu />
      </div>
      <div className={styles.profile_orders}>
        <ul className={styles.profile_orders_list}>
          {data.map((item, index) => {
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
  );
}

export default ProfileOrders;
