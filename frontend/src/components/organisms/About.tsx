import React from "react";

// scss
import styles from "./styles/About.module.scss";

// components
import AboutMoreBtn from "../atoms/AboutMoreBtn";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1 className={styles.aboutTitle}>
            WHAT'S
            <br />
            BRANDING
          </h1>
          <div className={styles.linkBox}>
            <AboutMoreBtn
              id="TUNIFYとは"
              text="TUNIFYとは"
              link="/about/tunify"
            />
            <AboutMoreBtn
              id="TUNIFYの特徴"
              text="TUNIFYの特徴"
              link="/about/feature"
            />
          </div>
        </div>
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
