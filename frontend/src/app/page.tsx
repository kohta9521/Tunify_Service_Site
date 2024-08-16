// scss

import styles from "../styles/page.module.scss";

// components
import Header from "@/components/organisms/Header";
import HeaderList from "@/components/molecules/HeaderList";
import ListItem from "@/components/atoms/ListItem";
import HamburgerBtn from "@/components/atoms/HamburgerBtn";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import AboutHalfScreen from "@/components/templates/AboutHalfScreen";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header id="home">
        <HeaderList id="home">
          <ListItem id="headerItem1" link="/" text="Home" color="white" />
          <ListItem id="headerItem1" link="/" text="About" color="white" />
          <ListItem id="headerItem1" link="/" text="service" color="white" />
          <ListItem id="headerItem1" link="/" text="Company" color="white" />
          <HamburgerBtn />
        </HeaderList>
      </Header>
      <Hero />
      <About />
      <AboutHalfScreen
        id="screen1"
        link="/"
        img="/images/hero2.jpg"
        date="2021.10.10"
        newsName="Sample"
        outlineText="samplesamplesamplesample"
        descText="sample samplesamplesamplejdasojasodfosdj"
      />
      <AboutHalfScreen
        id="screen1"
        link="/"
        img="/images/hero1.jpg"
        date="2021.10.10"
        newsName="Sample"
        outlineText="samplesamplesamplesample"
        descText="sample samplesamplesamplejdasojasodfosdj"
      />
      <AboutHalfScreen
        id="screen1"
        link="/"
        img="/images/hero.jpeg"
        date="2021.10.10"
        newsName="Sample"
        outlineText="samplesamplesamplesample"
        descText="sample samplesamplesamplejdasojasodfosdj"
      />
    </main>
  );
}
