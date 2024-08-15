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
        <Image
          className={styles.image}
          src="/images/hero.jpeg"
          width={1000}
          height={700}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
