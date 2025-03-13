import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../../components/Button";

import { GlobalReset } from ".";

const Demo = () => {
  const [value, setValue] = useState(true);
  const toggle = () => setValue((v) => !v);

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <b>Using GlobalReset: </b> {`${value}`}
      </div>
      <Button onClick={toggle}>Toggle reset</Button>
      {value && <GlobalReset />}
    </>
  );
};

export default {
  title: "Styles/GlobalReset",
  component: GlobalReset,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} as Meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  render: () => <Demo />,
};
