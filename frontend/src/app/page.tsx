// scss
import styles from "../styles/page.module.scss";

// components
import Logo from "@/components/atoms/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo id="homeLogo" size="large" />
    </main>
  );
}
