import { Meta, StoryObj } from "@storybook/react";

import HeaderList from "../HeaderList";
import ListItem from "@/components/atoms/ListItem";

const meta: Meta = {
  title: "Components/Molecules/HeaderList",
  component: HeaderList,
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

type HeaderListStory = StoryObj<typeof HeaderList>;

export const Default: HeaderListStory = {
  args: {
    id: "headerList1",
    children: (
      <>
        <ListItem id="headerItem1" link="/" text="Home" color="white" />
        <ListItem id="headerItem1" link="/" text="About" color="white" />
        <ListItem id="headerItem1" link="/" text="Service" color="white" />
        <ListItem id="headerItem1" link="/" text="Company" color="white" />
      </>
    ),
  },
};
