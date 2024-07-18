import React from "react";

// scss
import styles from "./styles/SecTitle.module.scss";

// props
export type SecTitleProps = {
  id: number;
  text: React.ReactNode;
};

const SecTitle = ({ id, text }: SecTitle) => {
  return (
    <div className={styles.box} key={id}>
      {text}
    </div>
  );
};

export default SecTitle;
