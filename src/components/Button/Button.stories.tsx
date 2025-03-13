import { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};
