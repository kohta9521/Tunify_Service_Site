// scss

import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organisms/Header";
import HeaderList from "@/components/molecules/HeaderList";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header id="home">
        <HeaderList id="home">
          <p>sample</p>
        </HeaderList>
      </Header>
    </main>
  );
}
