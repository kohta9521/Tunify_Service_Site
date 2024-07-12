import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// scss
import styles from "./styles/Logo.module.scss";

// props
export type LogoProps = {
  id: string;
  link: string;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
};

const Logo = ({
  id,
  link = "/",
  size = "medium",
  color = "white",
}: LogoProps) => {
  const imagePath =
    color == "black"
      ? "/images/common/logo_black.png"
      : "/images/common/logo_white.png";
  return;
  <Link href={link} className={`${styles.link} ${styles[size]}`}>
    sample
  </Link>;
};

export default Logo;
