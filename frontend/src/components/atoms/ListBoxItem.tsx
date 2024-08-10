import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ListBoxItem.module.scss";

// props
export type ListBoxItemProps = {
  id: string;
  link: string;
  text: string;
  color?: "black" | "white" | "pink" | "none";
};

const ListBoxItem = ({ id, link, text, color = "white" }: ListBoxItemProps) => {
  return (
    <Link key={id} className={`${styles.item} ${styles[color]}`} href={link}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default ListBoxItem;
