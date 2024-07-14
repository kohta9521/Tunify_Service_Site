import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Logo.module.scss";

// props
export type LogoProps = {
  id: number;
  link: string;
};

const Logo = ({ id, link }: LogoProps) => {
  return (
    <Link className={styles.link} href={link}>
      <p className={styles.text}>TUNIFY</p>
    </Link>
  );
};

export default Logo;
