import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Hero.module.scss";

// components
import HeroTitle from "../atoms/HeroTitle";
import HeroList from "../molecules/HeroList";
import SlideTextBox from "../molecules/SlideTextBox";
import ViewMoreBtn from "../atoms/ViewMoreBtn";
import SnsList from "../molecules/SnsList";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <div className={styles.leftBox}>
          <div className={styles.top}>
            <div className={styles.titleBox}>
              <HeroTitle />
            </div>
            <div className={styles.descBox}>
              <p className={styles.descText}>
                音楽の力は強い
                <br />
                音楽は人を繋げる
                <br />
                音楽を楽しまないか？
              </p>
              <ViewMoreBtn id="hero" link="/" />
            </div>
          </div>
          <div className={styles.bottom}>
            <HeroList />
            <SlideTextBox />
          </div>
        </div>
        <div className={styles.rightBox}>
          <SnsList />
        </div>
      </div>
      <div className={styles.heroBottom}>
        <div className={styles.leftImage}>
          <Image
            className={styles.image}
            src="/images/hero1.jpg"
            width={1000}
            height={700}
            alt="hero"
          />
        </div>
        <div className={styles.rightImage}>
          <Image
            className={styles.image}
            src="/images/hero2.jpg"
            width={1000}
            height={700}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
