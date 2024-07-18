import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// scss
import styles from "./styles/Hero.module.scss";

// components
import Header from "./Header";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src="/images/top/hero2.png"
          alt="hero"
          quality={100}
          width={1920}
          height={1080}
        />
        {/* <Link href="/diagnosis">
          <Image
            className={styles.circleImage}
            src="/images/top/circle.png"
            alt="circle"
            quality={100}
            width={400}
            height={400}
          />
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
