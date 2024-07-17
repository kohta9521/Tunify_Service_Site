import { StoryObj, Meta } from "@storybook/react";

// component
import ContactButton from "../ContactButton";

const meta: Meta = {
  title: "Components/Atoms/ContactButton",
  component: ContactButton,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "id",
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

type ContactButtonStory = StoryObj<typeof ContactButton>;

export const Default: ContactButtonStory = {
  args: {
    id: 1,
    link: "/contact",
  },
};
