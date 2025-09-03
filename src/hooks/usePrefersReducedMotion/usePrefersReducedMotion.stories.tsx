import { Meta, StoryObj } from "@storybook/react";

import { usePrefersReducedMotion } from ".";

const Demo = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div style={{ fontFamily: "Satoshi" }}>
      <b>User prefers reduced motion: </b>
      {`${prefersReduced}`}
    </div>
  );
};

export default {
  title: "Hooks/usePrefersReducedMotion",
  component: usePrefersReducedMotion,

  tags: ["autodocs"],
  parameters: { layout: "centered" },
} as Meta;

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  render: (args) => <Demo />,
};
