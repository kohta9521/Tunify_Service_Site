import { Meta, StoryObj } from "@storybook/react";

// components
import ListBox from "../ListBox";
import HeaderListItem from "@/components/atoms/HeaderListItem";

const meta: Meta = {
  title: "Components/Molecules/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id設定用の文字列",
    },
    children: {
      control: {
        type: "text",
      },
      description: "子要素",
    },
  },
};

export default meta;

type ListBoxStory = StoryObj<typeof ListBox>;

export const Default: ListBoxStory = {
  args: {
    id: "list-box",
    children: (
      <>
        <HeaderListItem id="home" link="/" text="Home" />
        <HeaderListItem id="about" link="/about" text="About" />
        <HeaderListItem id="service" link="/service" text="Service" />
        <HeaderListItem id="contact" link="/contact" text="Contact" />
      </>
    ),
  },
};
