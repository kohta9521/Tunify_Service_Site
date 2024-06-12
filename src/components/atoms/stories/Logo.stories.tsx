import type { Meta, StoryObj } from "@storybook/react";

// component
import Logo from "../Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: ["white", "black"],
    },
    size: {
      control: "radio",
      options: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
    },
    link: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const WhiteLogo: Story = {
  args: {
    color: "white",
    size: "m",
    link: "/",
  },
};

export const BlackLogo: Story = {
  args: {
    color: "black",
    size: "m",
    link: "/",
  },
};
