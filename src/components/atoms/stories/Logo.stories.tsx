import { StroyObj, Meta } from "@storybook/react";

// component
import Logo from "../Logo";

const meta: Meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "ロゴのid",
    },
    text: {
      control: {
        type: "string",
      },
      description: "ロゴの文字",
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

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    id: 1,
    text: "TUNIFY",
    link: "/",
  },
};
