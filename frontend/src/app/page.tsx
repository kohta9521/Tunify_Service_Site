// scss
import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organisms/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header id="home">
        <h1>sample</h1>
      </Header>
    </main>
  );
}
