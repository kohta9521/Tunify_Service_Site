import React from "react";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  color: "white" | "black";
  size: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
  link?: string;
};

const sizeClasses = {
  xxs: { width: 75, height: 31 }, // 比率を保つサイズ
  xs: { width: 112, height: 46 }, // 比率を保つサイズ
  s: { width: 150, height: 62 }, // 比率を保つサイズ
  m: { width: 225, height: 92 }, // 比率を保つサイズ
  l: { width: 300, height: 123 }, // 比率を保つサイズ
  xl: { width: 375, height: 154 }, // オリジナルサイズ
  xxl: { width: 450, height: 185 }, // 比率を保つサイズ
};

const Logo: React.FC<LogoProps> = ({ color, size, link = "/" }) => {
  const src =
    color === "white"
      ? "/images/common/logo_white.png"
      : "/images/common/logo_black.png";
  const sizeClass = sizeClasses[size];

  return (
    <Link href={link}>
      <Image src={src} alt="Logo" layout="fill" objectFit="contain" />
    </Link>
  );
};

export default Logo;
