import Image from "next/image";

// scss
import styles from "../styles/page.module.scss";
import Header from "@/components/organism/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
