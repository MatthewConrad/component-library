import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";

import { useIsVisible } from ".";

// @ts-expect-error Storybook hates hooks, it's fine.
export default {
  title: "Hooks/useIsVisible",
  component: useIsVisible,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  render: function Render(args) {
    const { isVisible, setVisible, setNotVisible, toggleVisibility } =
      useIsVisible();

    return (
      <>
        <div style={{ fontFamily: "Satoshi" }}>
          <b>isVisible: </b> {`${isVisible}`}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <Button onClick={setVisible}>setVisible</Button>
          <Button onClick={setNotVisible}>setNotVisible</Button>
          <Button onClick={toggleVisibility}>toggleVisibility</Button>
        </div>
      </>
    );
  },
} as Meta;

type Story = StoryObj<typeof useIsVisible>;

export const Default: Story = {};
