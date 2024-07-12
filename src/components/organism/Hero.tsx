import React from "react";

// scss
import styles from "./styles/Hero.module.scss";
import Header from "./Header";

// components

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
};

export default Hero;
