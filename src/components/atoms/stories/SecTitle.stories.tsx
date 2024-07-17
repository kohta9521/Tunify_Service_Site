import { StoryObj, Meta } from "@storybook/react";

// component
import SecTitle from "../SecTitle";

const meta: Meta = {
  title: "Components/Atoms/SecTitle",
  component: SecTitle,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
      description: "key設定用のid",
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

type SecTitleStory = StoryObj<typeof SecTitle>;

export const About: SecTitleStory = {
  args: {
    id: 1,
    text: (
      <>
        <h1>がんばりりすぎない</h1>
        <br />
        <h1>目元ケア。</h1>
      </>
    ),
  },
};
