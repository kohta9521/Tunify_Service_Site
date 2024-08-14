import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ViewMoreBtn.module.scss";

// icons
import { IoMdArrowForward } from "react-icons/io";

// props
export type ViewMoreBntProps = {
  id: string;
  link: string;
  size?: "small" | "medium" | "large";
  color?: "black" | "white" | "pink";
};

const ViewMoreBtn = ({
  id,
  link,
  size = "medium",
  color = "white",
}: ViewMoreBntProps) => {
  return (
    <Link
      className={`${styles.linkBox} ${styles[size]} ${styles[color]}`}
      key={id}
      href={link}
    >
      <IoMdArrowForward className={styles.icon} />
    </Link>
  );
};

export default ViewMoreBtn;
