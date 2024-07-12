import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ListItem.module.scss";

// props
export type ListItemProps = {
  id: string;
  text: string;
  link: string;
};

const ListItem = ({ id, text, link = "/" }: ListItem) => {
  return (
    <Link className={styles.link} key={id} href={link}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default ListItem;
