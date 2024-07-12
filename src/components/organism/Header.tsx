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
          <ListItem id="1" link="/login" text="ログイン" />
        </ListBox>
      </div>
    </div>
  );
};

export default Header;
