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
  color?: "black" | "white";
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
    <Image
      className={styles.logo_image}
      src="../../../public/images/common/logo_white.png"
    />
  </Link>;
};

export default Logo;
