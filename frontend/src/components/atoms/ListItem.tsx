import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ListItem.module.scss";

// props
export type ListItemProps = {
  id: string;
  link: string;
  text: string;
  color?: "black" | "white" | "pink";
};

const ListItem = ({ id, link, text, color = "white" }: ListItemProps) => {
  return (
    <Link className={styles.item} key={id} href={link}>
      <p className={`${styles.itemText} ${styles[color]}`}>{text}</p>
    </Link>
  );
};

export default ListItem;
