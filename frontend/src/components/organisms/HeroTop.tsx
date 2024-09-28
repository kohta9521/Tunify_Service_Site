import React from "react";

// scss
import styles from "./styles/HeroTop.module.scss";

// components

const HeroTop = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftBox}>
        <div className={styles.leftFlexBox}>
          <div className={styles.topLeftBox}></div>
          <div className={styles.topRightBox}></div>
        </div>
        <div className={styles.leftBottomBox}></div>
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default HeroTop;
