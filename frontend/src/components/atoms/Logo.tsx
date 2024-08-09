import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Logo.module.scss";

// props
export type LogoProps = {
    id: string;
    size?: "small" | "medium" | "large";
    color?: "black" | "white" | "pink";
};

const Logo = ({ id, size = "medium", color = "pink" }: LogoProps) => {
    return (
        <Link className={styles.logo} href="/" key={id}>
            <h1 className={`${styles.logoText} ${styles[size]} ${styles[color]}`}>
                TUNIFY
            </h1>
        </Link>
    );
};

export default Logo;
