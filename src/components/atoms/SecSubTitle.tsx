import React from "react";

// scss
import styles from "./styles/SecSubTitle.module.scss";

// props
export type SecSubTitleProps = {
  id: number;
  stringId: string;
  text: string;
};

export const SecSubTitle = ({ id, stringId, text }: SecSubTitle) => {
  return (
    <div className={styles.box} key={id} id={`#${stringId}`}>
      <span className={styles.circle}></span>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SecSubTitle;
