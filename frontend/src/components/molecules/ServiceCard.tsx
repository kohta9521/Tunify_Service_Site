import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/ServiceCard.module.scss";

// components

// props
export type ServiceCardProps = {
  id: string;
  link: string;
  number: string;
  jaTitle: string;
  enTitle: string;
  tagArray: string[];
  desc: string;
  img: string;
};

export const ServiceCard = ({
  id,
  link,
  number,
  jaTitle,
  enTitle,
  tagArray,
  desc,
  img,
}: ServiceCardProps) => {
  return (
    <Link href={link} className={styles.linkBox} key={id}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <p className={styles.number}>{number}</p>
          <h2 className={styles.jaTitle}>{jaTitle}</h2>
          <h3 className={styles.enTitle}>{enTitle}</h3>
        </div>
        <div className={styles.topRight}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <div className={styles.tagBox}>
            {tagArray.map((tag, index) => (
              <p className={styles.tag} key={index}>
                # {tag}
              </p>
            ))}
          </div>
          <div className={styles.descBox}>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <Image
            className={styles.image}
            src={img}
            alt="serviceCardImage"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
