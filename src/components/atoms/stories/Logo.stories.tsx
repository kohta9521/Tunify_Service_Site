import { StoryObj, Meta } from "@storybook/react";

import Logo from "../Logo";

const meta: Meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "string",
      },
    },
    link: {
      control: {
        type: "string",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xsmall", "small", "medium", "large", "xlarge"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["black", "white"],
      },
    },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Black: LogoStory = {
  args: {
    id: 1,
    link: "/",
    size: "medium",
    color: "black",
  },
};

export const White: LogoStory = {
  args: {
    id: 1,
    link: "/",
    size: "medium",
    color: "white",
  },
};
