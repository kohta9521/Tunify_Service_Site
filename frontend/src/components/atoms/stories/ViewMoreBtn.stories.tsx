import { Meta, StoryObj } from "@storybook/react";

import ViewMoreBtn from "../ViewMoreBtn";

const meta: Meta = {
  title: "Components/Atoms/ViewMoreBtn",
  component: ViewMoreBtn,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用の文字列",
    },
    link: {
      control: {
        type: "text",
      },
      description: "リンク先のURL",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "サイズの種類",
    },
    color: {
      control: {
        type: "select",
        options: ["black", "white", "pink"],
      },
      description: "色の種類",
    },
  },
};

export default meta;

type ViewMoreBtnStory = StoryObj<typeof ViewMoreBtn>;

export const Default: ViewMoreBtnStory = {
  args: {
    id: "viewMoreBtn1",
    link: "/",
    size: "medium",
    color: "pink",
  },
};
