import { StoryObj, Meta } from "@storybook/react";

// component
import Logo from '../Logo';
import { Component } from "react";

const meta = {
    title: "Atoms/Logo",
    component: Logo,
    tags: ["autodocs"],
}

export default meta;

typeof LogoStory = StoryObj<typeof Logo>

