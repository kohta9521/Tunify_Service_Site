import React from "react";

// scss
import styles from "./styles/HamburgerBtn.module.scss";

const HamburgerBtn = () => {
  return (
    <div className={styles.Btn}>
      <span className={styles.border}></span>
      <span className={styles.border}></span>
      <span className={styles.border}></span>
    </div>
  );
};

export default HamburgerBtn;
