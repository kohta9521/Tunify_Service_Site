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
          <div className={styles.top}>
            <p className={styles.smallTitle}>人と人とが友人になる確率</p>
            <h3 className={styles.title}>
              <span className={styles.number}>2</span>億
              <span className={styles.number}>4000</span>万分の
              <span className={styles.number}>1</span>
            </h3>
          </div>
          <div className={styles.bottom}>
            <h3 className={styles.title}>音楽は人と人を繋げる</h3>
            <p className={styles.bottomText}>
              人と人が赤の他人から友人になる確率は限りなく低い。
              初対面の人と好きな曲・好きなアーティスト・好きなライブの話ができたらどうだろう？
              一気に距離は縮まり楽しい時間が生まれる。出会い、仲良くなるためのきっかけは音楽が提供してくれる。
              音楽が人にもたらす力を感じないか？
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
