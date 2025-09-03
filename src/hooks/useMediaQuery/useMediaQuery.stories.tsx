import { Meta, StoryObj } from "@storybook/react";

import { mediaQueryConditions } from "../../styles/mediaQuery";

import { useMediaQuery } from ".";

export default {
  title: "Hooks/useMediaQuery",
  component: useMediaQuery,
  argTypes: {
    query: {
      options: [...Object.keys(mediaQueryConditions)],
      mapping: Object.keys(mediaQueryConditions).reduce(
        (queries, key) => ({
          ...queries,
          [key]: mediaQueryConditions[key as keyof typeof mediaQueryConditions],
        }),
        {},
      ),
      control: {
        type: "select",
      },
      description:
        "A valid CSS `@media` query string to check for. For this story, options from the `mqConditions` helper are provided.",
    },
    callback: {
      control: false,
      description: "A callback function fired when the match status changes.",
    },
    deps: {
      control: false,
      description:
        "If present, hook will re-run if the values in the list change.",
    },
  },
  args: {
    query: mediaQueryConditions.whileHover,
  },
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  render: function Render(args) {
    const matched = useMediaQuery(args.query);

    return (
      <div>
        <b>{args.query}: </b>
        {`${matched}`}
      </div>
    );
  },
} as Meta;

type Story = StoryObj<typeof useMediaQuery>;

//@ts-expect-error Storybook can't handle hooks that don't just take an object
export const Default: Story = {};
