import React from "react";

// scss
import styles from "./styles/HeroTitle.module.scss";

const HeroTitle = () => {
  return (
    <div className={styles.titleBox}>
      <h1 className={styles.title}>
        CONNECT THROUGH MUSIC
        <br />
        ENJOY TOGETHER
      </h1>
    </div>
  );
};

export default HeroTitle;
