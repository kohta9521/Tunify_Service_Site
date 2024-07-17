import React from "react";

// scss
import styles from "./styles/DefaultText.module.scss";

// props
export type DefaultTextProps = {
  id: number;
  text: string;
};

const DefaultText = ({ id, text }: DefaultTextProps) => {
  return (
    <p className={styles.text} key={id}>
      {text}
    </p>
  );
};

export default DefaultText;
