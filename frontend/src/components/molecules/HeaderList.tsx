import React from "react";

// scss
import styles from "./styles/HeaderList.module.scss";

// props
export type HeaderListProps = {
  id: string;
  children: React.ReactNode;
};

const HeaderList = ({ id, children }: HeaderListProps) => {
  return (
    <div className={styles.listBox} key={id}>
      {children}
    </div>
  );
};

export default HeaderList;
