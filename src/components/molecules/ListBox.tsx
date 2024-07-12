import React from "react";

// scss
import styles from "./styles/ListBox.module.scss";

// props
export type ListItemProps = {
  id: string;
  children: React.ReactNode;
};

const ListBox = ({ id, children }: ListBoxProps) => {
  return (
    <div className={styles.box} key={id}>
      {children}
    </div>
  );
};

export default ListBox;
