import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";
import ListBox from "../molecules/ListBox";
import ListItem from "../atoms/ListItem";
import ContactButton from "../atoms/ContactButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <Logo id={1} link="/" />
      </div>
      <div className={styles.rightBox}>
        <ListBox id={1}>
          <ListItem id={1} text="Home" link="/" />
          <ListItem id={1} text="About" link="/" />
          <ListItem id={1} text="Service" link="/" />
          <ContactButton />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
