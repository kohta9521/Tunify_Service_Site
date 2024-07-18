import { StoryObj, Meta } from "@storybook/react";

// component
import ConceptText from "../ConceptText";

const meta: Meta = {
  title: "Components/Atoms/ConceptText",
  component: ConceptText,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "string",
      },
      description: "表示する文字列",
    },
  },
};

export default meta;

type ConceptTextStory = StoryObj<typeof ConceptText>;

export const Default: ConceptTextStory = {
  args: {
    text: (
      <>
        <p>
          あなたが、あなたの時間を生きるように。
          <br />
          私も、私の時間を生きている。
          <br />
          誰もが自分の喜びや悲しみを、その表情を
          <br />
          毎分毎秒、その目元に宿している。
          <br />
          つまり、がんばって生きている。ってことだ。
          <br />
          <br />
          私たちのめまぐるしい毎日を映す目元を ケアする時間をちょっとでも楽に。
          <br />
          キーボードのショートカットキーみたいに さっと整えて、あなたに似合う、
          <br />
          がんばりすぎない目元ケアを。
        </p>
      </>
    ),
  },
};
