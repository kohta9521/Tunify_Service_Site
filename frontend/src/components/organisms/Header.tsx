import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "@/components/atoms/Logo";

// props
export type HeaderProps = {
  id: string;
  children: React.ReactNode;
};

const Header = ({ id, children }: HeaderProps) => {
  return (
    <div className={styles.header} key={id}>
      <div className={styles.leftBox}>
        <Logo id="home" size="large" color="white" />
      </div>
      <div className={styles.rightBox}>{children}</div>
    </div>
  );
};

export default Header;
