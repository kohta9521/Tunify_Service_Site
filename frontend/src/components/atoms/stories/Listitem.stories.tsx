import { Meta, StoryObj } from "@storybook/react";

import ListItem from "../ListItem";

const meta: Meta = {
  title: "Components/Atoms/ListItem",
  component: ListItem,
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
    color: {
      control: {
        type: "select",
        options: ["black", "white", "pink"],
      },
    },
  },
};

export default meta;

type ListItemStory = StoryObj<typeof ListItem>;

export const Default: ListItemStory = {
  args: {
    id: "headerItem1",
    link: "/",
    text: "Home",
    color: "white",
  },
};
