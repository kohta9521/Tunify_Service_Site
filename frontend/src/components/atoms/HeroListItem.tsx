import React from "react";

// scss
import styles from "./styles/HeroListItem.module.scss";

// props
export type HeroListItemProps = {
  id: string;
  text: string;
};

const HeroListItem = ({ id, text }: HeroListItemProps) => {
  return (
    <div className={styles.listBox} key={id}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default HeroListItem;
