import { StoryObj, Meta } from "@storybook/react";

// component
import ListBox from "../ListBox";
import ListItem from "@/components/atoms/ListItem";

const meta: Meta = {
  title: "Components/Molecules/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "string",
      },
    },
    children: {
      control: {
        type: "React.ReactNode",
      },
    },
  },
};

export default meta;

type ListBoxStory = StoryObj<typeof ListBox>;

export const Default: ListBoxStory = {
  args: {
    id: "1",
    children: (
      <>
        <ListItem id="1" text="リストアイテム" link="/" />
        <ListItem id="1" text="リストアイテム" link="/" />
        <ListItem id="1" text="リストアイテム" link="/" />
      </>
    ),
  },
};
