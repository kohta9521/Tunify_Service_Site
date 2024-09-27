import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Footer.module.scss";

// components

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/" className={styles.topButton}>
            TOP
          </Link>
        </div>
        <div className={styles.middle}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default Footer;
