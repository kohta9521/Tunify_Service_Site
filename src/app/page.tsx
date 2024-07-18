import Image from "next/image";

// scss
import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Concept from "@/components/organism/Concept";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Concept />
    </main>
  );
}
