import React from "react";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useDispatch } from "react-redux";
import { closeAllPopups } from "../../services/actions";
import { useHistory } from "react-router-dom";

type TPropsType = {
  type: string;
  isModal: {};
  header: string;
  children: {};
};

function Modal(props: TPropsType) {
  const history = useHistory();
  const dispatch = useDispatch();
  const goBack = () => {
    history.goBack();
  };
  function onClose() {
    if (props.type === "goBack") {
      dispatch(closeAllPopups(goBack));
    } else {
      dispatch(closeAllPopups());
    }
  }

  React.useEffect(() => {
    function closeByEsc(evt: any) {
      if (evt.keyCode === 27) {
        onClose();
      }
    }
    document.addEventListener("keydown", closeByEsc, false);
    return () => {
      document.removeEventListener("keydown", closeByEsc, false);
    };
  }, []);

  return (
    <section
      className={`${styles.modal} ${props.isModal && styles.modal_active}`}
    >
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal_container}>
        <header className={`${styles.modal_header} m-5`}>
          <h3 className={styles.modal_title}>{props.header}</h3>
          <button className={styles.modal_close_icon} onClick={onClose}>
            {" "}
          </button>
        </header>
        <div id="test">{props.children}</div>
      </div>
    </section>
  );
}

export default Modal;
