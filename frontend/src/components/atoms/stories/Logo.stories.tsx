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

export const SmallWhite: Logo = {
  args: {
    id: "home",
    size: "small",
    color: "white",
  },
};

export const MediumWhite: Logo = {
  args: {
    id: "home",
    size: "medium",
    color: "white",
  },
};

export const LargeWhite: Logo = {
  args: {
    id: "home",
    size: "large",
    color: "white",
  },
};

export const SmallBlack: Logo = {
  args: {
    id: "home",
    size: "medium",
    color: "white",
  },
};

export const MediumBlack: Logo = {
  args: {
    id: "home",
    size: "medium",
    color: "black",
  },
};

export const LargeBlack: Logo = {
  args: {
    id: "home",
    size: "large",
    color: "black",
  },
};

export const SmallPink: Logo = {
  args: {
    id: "home",
    size: "small",
    color: "pink",
  },
};

export const MediumPink: Logo = {
  args: {
    id: "home",
    size: "medium",
    color: "pink",
  },
};

export const LargePink: Logo = {
  args: {
    id: "home",
    size: "large",
    color: "pink",
  },
};
