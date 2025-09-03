import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";

import { useBoolean } from ".";

const Demo = () => {
  const { value, setTrue, setFalse, toggle } = useBoolean();

  return (
    <>
      <div style={{ fontFamily: "Satoshi" }}>
        <b>Value: </b> {`${value}`}
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <Button onClick={setTrue}>setTrue</Button>
        <Button onClick={setFalse}>setFalse</Button>
        <Button onClick={toggle}>toggle</Button>
      </div>
    </>
  );
};

// @ts-expect-error Storybook hates hooks, it's fine.
export default {
  title: "Hooks/useBoolean",
  component: useBoolean,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} as Meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  render: () => <Demo />,
};
