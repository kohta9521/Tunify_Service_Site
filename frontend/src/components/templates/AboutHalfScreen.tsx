import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/AboutHalfScreen.module.scss";

// components

// props
export type AboutHalfScreenProps = {
  id: string;
  link: string;
  img: string;
  date: string;
  newsName: string;
  outlineText: string;
  descText: string;
};

const AboutHalfScreen = ({
  id,
  link,
  img,
  date,
  newsName,
  outlineText,
  descText,
}: AboutHalfScreenProps) => {
  return (
    <Link className={styles.screen} href={link} key={id}>
      <Image className={styles.image} src={img} alt="aboutHalfScreenImage" width={600} height={600} />
      <div className={styles.topBox}>
        <div className={styles.topLeftBox}>
          <p className={styles.sectionTitle}>New Release</p>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.topRightBox}>
          <p className={styles.clientName}>{newsName}</p>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <div className={styles.TextBox}>
          <p className={styles.bottomTitle}>outline</p>
          <p className={styles.bottomText}>{outlineText}</p>
        </div>
        <div className={styles.textBox}>
          <p className={styles.bottomTitle}>description</p>
          <p className={styles.bottomText}>{descText}</p>
        </div>
      </div>
    </Link>
  );
};

export default AboutHalfScreen;
