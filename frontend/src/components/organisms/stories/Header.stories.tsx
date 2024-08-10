import { Meta, StoryObj } from "@storybook/react";

import Header from "../Header";
import HeaderList from "@/components/molecules/HeaderList";
import ListItem from "@/components/atoms/ListItem";

const meta: Meta = {
  title: "Components/Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type HeaderStory = StoryObj<typeof Header>;

export const Default: HeaderStory = {
  args: {
    id: "home",
    children: (
      <HeaderList id="home">
        <HeaderList id="home">
          <ListItem id="headerItem1" link="/" text="Home" color="pink" />
          <ListItem id="headerItem1" link="/" text="About" color="pink" />
          <ListItem id="headerItem1" link="/" text="service" color="pink" />
          <ListItem id="headerItem1" link="/" text="Company" color="pink" />
        </HeaderList>
      </HeaderList>
    ),
  },
};
