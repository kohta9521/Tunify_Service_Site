import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ContactButton.module.scss";

// props
export type ContactButtonProps = {
    id: number;
    link: string;
}


const ContactButton = () => {
    return (
        <Link>
            <p className={styles.text}>

            </p>
        </Link>
    )
}
