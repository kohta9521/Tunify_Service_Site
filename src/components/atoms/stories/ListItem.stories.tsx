import { StoryObj, Meta } from "@storybook/react";

// component
import ListItem from "../ListItem";

const meta: Meta = {
  title: "Atoms/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "string",
      },
      description: "リストのid",
    },
    text: {
      control: {
        type: "string",
      },
      description: "リストのテキスト",
    },
    link: {
      control: {
        type: "string",
      },
      description: "リンク先",
    },
  },
};

export default meta;

type ListItemStory = StoryObj<typeof ListItem>;

export const Default: ListItemStory = {
  args: {
    id: "1",
    text: "リストアイテム",
    link: "/",
  },
};
