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
};

const ViewMoreBtn = ({ id, link }: ViewMoreBntProps) => {
  return (
    <Link className={styles.linkBox} key={id} href={link}>
      <IoMdArrowForward className={styles.icon} />
    </Link>
  );
};

export default ViewMoreBtn;
