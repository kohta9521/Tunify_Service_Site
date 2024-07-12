import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";
import ListBox from "../molecules/ListBox";
import ListItem from "../atoms/ListItem";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftBox}>
        <Logo id="1" link="/" size="medium" color="white" />
      </div>
      <div className={styles.rightBox}>
        <ListBox id={1}>
          <ListItem id="1" link="/" text="Home" />
          <ListItem id="2" link="/about" text="About" />
          <ListItem id="3" link="/service" text="Service" />
          <ListItem id="4" link="/price" text="Price" />
          <ListItem id="5" link="/contact" text="Contact" />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
