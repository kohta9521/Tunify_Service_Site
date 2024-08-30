import React from "react";

// scss
import styles from "./styles/ServiceCardBox.module.scss";

// components

// props
export type ServiceCardBoxProps = {
  id: string;
  children: React.ReactNode;
};

const ServiceCardBox = ({ id, children }: ServiceCardBoxProps) => {
  return (
    <div key={id} className={styles.box}>
      {children}
    </div>
  );
};

export default ServiceCardBox;
