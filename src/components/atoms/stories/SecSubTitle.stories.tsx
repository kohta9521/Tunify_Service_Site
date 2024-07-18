import { StoryObj, Meta } from "@storybook/react";

// component
import SecSubTitle from "../SecSubTitle";

const meta: Meta = {
  title: "Components/Atoms/SecSubtitle",
  component: SecSubTitle,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "key設定用のid",
    },
    stringId: {
      control: {
        type: "string",
      },
      description: "サイト内で`#`始まるidの設定用",
    },
    text: {
      control: {
        type: "string",
      },
      description: "表示する文字列",
    },
  },
};

export default meta;

type SecSubTitleStory = StoryObj<typeof SecSubTitle>;

export const About: SecSubTitleStory = {
  args: {
    id: 1,
    stringId: "about",
    text: "About",
  },
};
