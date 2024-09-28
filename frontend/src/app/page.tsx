// components
import Header from "@/components/organisms/Header";
import ListBox from "@/components/molecules/ListBox";
import HeaderListItem from "@/components/atoms/HeaderListItem";
import HeroTop from "@/components/organisms/HeroTop";

export default function Home() {
  return (
    <main>
      <Header id="topPageHeader">
        <ListBox id="topPageListBox">
          <HeaderListItem id="home" link="/" text="Home" />
          <HeaderListItem id="about" link="/about" text="About" />
          <HeaderListItem id="service" link="/service" text="Service" />
          <HeaderListItem id="contact" link="/contact" text="Contact" />
        </ListBox>
      </Header>
      <HeroTop />
    </main>
  );
}
