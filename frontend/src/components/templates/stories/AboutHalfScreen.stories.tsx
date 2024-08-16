import { Meta, StoryObj } from "@storybook/react";

// components
import AboutHalfScreen from "../AboutHalfScreen";

const meta: Meta = {
  title: "Components/Templates/AboutHalfScreen",
  component: AboutHalfScreen,
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
    img: {
      control: {
        type: "text",
      },
      description: "画像のURL",
    },
    date: {
      control: {
        type: "text",
      },
      description: "日付",
    },
    newsName: {
      control: {
        type: "text",
      },
      description: "ニュース名",
    },
    outlineText: {
      control: {
        type: "text",
      },
      description: "概要",
    },
    descText: {
      control: {
        type: "text",
      },
      description: "詳細",
    },
  },
};

export default meta;

type AboutHalfScreenStory = StoryObj<typeof AboutHalfScreen>;

export const Default: AboutHalfScreenStory = {
  args: {
    id: "aboutHalfScreen1",
    link: "/",
    img: "/images/hero2.jpg",
    date: "2021-01-01",
    newsName: "NewsName",
    outlineText: "OutlineText",
    descText: "DescText",
  },
};
