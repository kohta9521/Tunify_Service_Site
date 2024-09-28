import React from "react";

// scss
import styles from "./styles/ListBox.module.scss";

// props
export type ListBoxProps = {
  id: string;
  children: React.ReactNode;
};

const ListBox = ({ id, children }: ListBoxProps) => {
  return (
    <div key={id} className={styles.box}>
      {children}
    </div>
  );
};

export default ListBox;
