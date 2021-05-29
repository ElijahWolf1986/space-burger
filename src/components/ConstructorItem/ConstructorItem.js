import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  CurrencyIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import {
  removeClientIngredient,
  moveClientIngredient,
} from "../../services/actions";
import styles from "./ConstructorItem.module.css";
import PropTypes from "prop-types";

ConstructorItem.propTypes = {
  bunLock: PropTypes.bool,
  bunLock_top: PropTypes.bool,
  bunLock_bottom: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

function ConstructorItem(item) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = item._id;
  const index = item.index;
  
  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(moveClientIngredient({ dragIndex, hoverIndex }));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "constructor",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <section style={{ opacity }}
      className={`${styles.container} p-2 ${
        item.bunLock_top !== undefined && styles.container_bun_top
      } ${item.bunLock_bottom !== undefined && styles.container_bun_bottom} `}
      ref={ref}
      data-handler-id={handlerId}
    >
      <div className={`${styles.container_ingredient_info}`}>
        <img
          className={styles.container_ingredient_image}
          src={item.image}
          alt={item.name}
        />
        <p className={styles.container_ingredient_name}>{item.name}</p>
      </div>

      <div className={styles.container_ingredient_price}>
        <p className={styles.container_ingredient_price_value}>{item.price}</p>
        <CurrencyIcon />
        {item.bunLock === undefined ? (
          <button
            className={styles.container_button_delete}
            onClick={() => {
              dispatch(removeClientIngredient(item.ingredientId));
            }}
          ></button>
        ) : (
          <div className={styles.container_lock_icon}>
            <LockIcon type="primary" />
          </div>
        )}
      </div>
    </section>
  );
}

export default ConstructorItem;
