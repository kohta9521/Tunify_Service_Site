import { Meta, StoryObj } from "@storybook/react";

import Logo from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
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
    color: {
      control: {
        type: "select",
        options: ["black", "white", "pink"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;

type Logo = StoryObj<typeof Logo>;

export const Default: Logo = {
  args: {
    id: "home",
    size: "medium",
    color: "pink",
  },
};
