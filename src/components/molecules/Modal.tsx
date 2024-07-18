import React from "react";

// scss
import styels from "./styles/Modal.module.scss";

// props
export type ModalProps = {
  id: number;
  img: string;
  title: string;
  date: string;
  text: React.ReactNode;
};

const Modal = ({ id, img, title, date, text }: ModalProps) => {
  return (
    <div className={style.modal}>
      <p>modal</p>
    </div>
  );
};

export default Modal;
