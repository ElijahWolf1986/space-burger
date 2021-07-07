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

type TItem = {
  _id: string;
  image: string;
  name: string;
  price: number;
  index: number;
  bunLock: boolean;
  bunLock_top: boolean;
  bunLock_bottom: boolean;
  ingredientId: string;
};

function ConstructorItem(item: TItem) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const id = item._id;
  const index = item.index;

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    dispatch(moveClientIngredient({ dragIndex, hoverIndex }));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TItem, monitor) {
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
      const hoverClientY =
        clientOffset && clientOffset.y - hoverBoundingRect.top;
      if (
        hoverClientY &&
        dragIndex < hoverIndex &&
        hoverClientY < hoverMiddleY
      ) {
        return;
      }
      if (
        hoverClientY &&
        dragIndex > hoverIndex &&
        hoverClientY > hoverMiddleY
      ) {
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
    <section
      style={{ opacity }}
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
        <CurrencyIcon type="primary" />
        {item.bunLock === undefined ? (
          <button
            id="delete-button"
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
