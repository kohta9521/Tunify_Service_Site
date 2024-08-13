import React from "react";

// scss
import styles from "./styles/Hero.module.scss";

// components

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <div className={styles.leftBox}>
          <div className={styles.top}>
            <div className={styles.titleBox}></div>
            <div className={styles.descBox}></div>
          </div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.rightBox}></div>
      </div>
      <div className={styles.heroBottom}></div>
    </div>
  );
};

export default Hero;
