import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/HeaderListItem.module.scss";

// props
export type HeaderListItemProps = {
  id: string;
  link: string;
  text: string;
};

const HeaderListItem = ({ id, link, text }: HeaderListItemProps) => {
  return (
    <Link className={styles.item} key={id} href={link}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default HeaderListItem;
