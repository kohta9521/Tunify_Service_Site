import React from "react";

// scss
import styles from "./styles/Hero.module.scss";

// components
import Header from "./Header";
import Logo from "../atoms/Logo";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}></div>
    </div>
  );
};

export default Hero;
