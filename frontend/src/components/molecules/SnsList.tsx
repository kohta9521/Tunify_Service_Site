import React from "react";

// Link
import Link from "next/link";

// scss
import styles from "./styles/SnsList.module.scss";

// icons
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const SnsList = () => {
  return (
    <div className={styles.list}>
      <p className={styles.text}>official SNS</p>
      <Link className={styles.linkBox} href="/">
        <FaXTwitter className={styles.icon} />
      </Link>
      <Link className={styles.linkBox} href="/">
        <FaYoutube className={styles.icon} />
      </Link>
      <Link className={styles.linkBox} href="/">
        <FaTiktok className={styles.icon} />
      </Link>
    </div>
  );
};

export default SnsList;
