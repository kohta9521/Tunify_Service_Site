import { Meta, StoryObj } from "@storybook/react";

// components
import ServiceCard, { ServiceCardProps } from "../ServiceCard";

const meta: Meta = {
  title: "Components/Molecules/ServiceCard",
  component: ServiceCard,
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
    number: {
      control: {
        type: "text",
      },
      description: "表示用の数字 (例: 01)",
    },
    jaTitle: {
      control: {
        type: "text",
      },
      description: "日本語タイトル",
    },
    enTitle: {
      control: {
        type: "text",
      },
      description: "英語タイトル",
    },
    tagArray: {
      control: {
        type: "text",
      },
      description: "タグの配列",
    },
    desc: {
      control: {
        type: "text",
      },
      description: "説明文",
    },
    img: {
      control: {
        type: "text",
      },
      description: "画像のURL",
    },
  },
};

export default meta;

type ServiceCardStory = StoryObj<typeof ServiceCard>;

export const Default: ServiceCardStory = {
  args: {
    id: "serviceCard1",
    link: "/",
    number: "01",
    jaTitle: "ブランディング",
    enTitle: "BRANDING",
    tagArray: [
      "企業ブランディング",
      "商品ブランディング",
      "採用ブランディング",
      "インナーブランディング",
    ],
    desc: "長期的な信頼関係を築ける組織とともに成長することをビジョンとし、クライアントのビジネス活動をクリエイティブ面で包括的にサポートします。社内にあらゆる専門チームがあり、一気通貫で高品質なクリエイティブを生み出します。",
    img: "/images/hero1.jpg",
  },
};
