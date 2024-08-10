import { Meta, StoryObj } from "@storybook/react";

import ListBoxItem from "../ListBoxItem";

const meta: Meta = {
  title: "Components/Atoms/ListBoxItem",
  component: ListBoxItem,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用の文字列",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先のURL",
    },
    text: {
      control: {
        type: "text",
      },
      description: "表示する文字列",
    },
    color: {
      control: {
        type: "select",
        options: ["black", "white", "pink"],
      },
      description: "文字色",
    },
  },
};

export default meta;

type ListBoxItemStory = StoryObj<typeof ListBoxItem>;

export const Default: ListBoxItemStory = {
  args: {
    id: "headerItem1",
    link: "/",
    text: "Home",
    color: "white",
  },
};

export const Black: ListBoxItemStory = {
  args: {
    id: "headerItem1",
    link: "/",
    text: "Home",
    color: "black",
  },
};

export const Pink: ListBoxItemStory = {
  args: {
    id: "headerItem1",
    link: "/",
    text: "Home",
    color: "pink",
  },
};
