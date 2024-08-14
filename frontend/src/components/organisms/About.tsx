import React from "react";

// scss
import styles from "./styles/About.module.scss";

// components

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.leftBox}></div>
        <div className={styles.rightBox}>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}></div>
            <div className={styles.bottomRight}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
