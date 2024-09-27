import { Meta, StoryObj } from "@storybook/react";

// components
import HeaderListItem from "../HeaderListItem";

const meta: Meta = {
  title: "Components/Atoms/HeaderListItem",
  component: HeaderListItem,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
    },
    link: {
      control: {
        type: "text",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type HeaderListItemStory = StoryObj<typeof HeaderListItem>;

export const Home: HeaderListItemStory = {
  args: {
    id: "home",
    link: "/",
    text: "Home",
  },
};

export const About: HeaderListItemStory = {
  args: {
    id: "about",
    link: "/about",
    text: "About",
  },
};

export const Service: HeaderListItemStory = {
  args: {
    id: "service",
    link: "/service",
    text: "Service",
  },
};

export const Contact: HeaderListItemStory = {
  args: {
    id: "contact",
    link: "/contact",
    text: "Contact",
  },
};
