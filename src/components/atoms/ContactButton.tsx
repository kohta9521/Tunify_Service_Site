import Link from 'next/link';
import React from 'react';

// next

// scss
import styles from './styles/ContactButton.module.scss';

// props
export type ContactButtonProps = {
  id: number;
  link: string;
};

const ContactButton = () => {
  return (
    <Link
      href='/contact'
      className={styles.link}
    >
      <p className={styles.text}>お問い合わせをする</p>
    </Link>
  );
};

export default ContactButton;
