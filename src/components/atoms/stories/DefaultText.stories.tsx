import { StoryObj, Meta } from "@storybook/react";

// component
import DefaultText from "../DefaultText";

const meta: Meta = {
  title: "Components/Atoms/DefaultText",
  component: DefaultText,
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

type DefaultTextStory = StoryObj<typeof DefaultText>;

export const Default: DefaultTextStory = {
  args: {
    id: 1,
    text: "体温付近に融点を持つメルティングオイル*6を配合。バームに触れるとじゅわっととろけ、肌の上でなめらかに伸びます。",
  },
};
