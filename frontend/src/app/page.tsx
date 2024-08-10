// scss

import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organisms/Header";
import HeaderList from "@/components/molecules/HeaderList";
import ListItem from "@/components/atoms/ListItem";
import ListBoxItem from "@/components/atoms/ListBoxItem";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header id="home">
        <HeaderList id="home">
          <ListItem id="headerItem1" link="/" text="Home" color="white" />
          <ListItem id="headerItem1" link="/" text="About" color="white" />
          <ListItem id="headerItem1" link="/" text="service" color="white" />
          <ListItem id="headerItem1" link="/" text="Company" color="white" />
          <ListBoxItem id="headerItem1" link="/" text="Login" color="pink" />
          <ListBoxItem id="headerItem1" link="/" text="Login" color="pink" />
        </HeaderList>
      </Header>
    </main>
  );
}
