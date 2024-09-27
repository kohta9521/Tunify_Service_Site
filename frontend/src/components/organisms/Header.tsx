import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";

// props
export type HeaderProps = {
  id: string;
  children: React.ReactNode;
};

const Header = ({ id, children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo id="home" size="medium" color="white" />
        </div>
        <div className={styles.right}>{children}</div>
      </div>
    </header>
  );
};

export default Header;
