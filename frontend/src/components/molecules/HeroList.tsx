import React from "react";

// scss
import styles from "./styles/HeroList.module.scss";

// components
import HeroListItem from "../atoms/HeroListItem";

const HeroList = () => {
  return (
    <div className={styles.listBox}>
      <HeroListItem id="1" text="STREAM" />
      <span className={styles.border}></span>
      <HeroListItem id="2" text="DISCOVER" />
      <span className={styles.border}></span>
      <HeroListItem id="3" text="PLAYLIST SHARING" />
      <span className={styles.border}></span>
      <HeroListItem id="4" text="CONNECT" />
      <span className={styles.border}></span>
      <HeroListItem id="5" text="SHARE" />
      <span className={styles.border}></span>
      <HeroListItem id="6" text="OTHERS" />
    </div>
  );
};

export default HeroList;
