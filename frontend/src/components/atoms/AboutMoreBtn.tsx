import React from "react";

// scss
import styles from "./styles/AboutMoreBtn.module.scss";

// components
import ViewMoreBtn from "./ViewMoreBtn";

// props
export type AboutMoreBtnProps = {
  id: string;
  text: string;
  link: string;
};

const AboutMoreBtn = ({ id, text, link }: AboutMoreBtnProps) => {
  return (
    <div className={styles.textBox} key={id}>
      <p className={styles.text}>{text}</p>
      <ViewMoreBtn id="viewMoreBtn" link={link} />
    </div>
  );
};

export default AboutMoreBtn;
