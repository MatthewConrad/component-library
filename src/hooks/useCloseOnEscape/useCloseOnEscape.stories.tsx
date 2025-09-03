import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components/Button";
import { UICard } from "../../components/UICard";

import { useCloseOnEscape } from ".";
import { useIsVisible } from "../useIsVisible";

const Demo = () => {
  const { isVisible, setVisible, setNotVisible } = useIsVisible(false);
  useCloseOnEscape(isVisible, setNotVisible);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        height: 240,
      }}
    >
      <Button onClick={setVisible}>Show Element</Button>
      {isVisible && <UICard>Press Escape to hide.</UICard>}
    </div>
  );
};

/**
 * Sets an event listener to execute a callback function when the "Escape" key is pressed.
 * Typically used to help manage visibility of a modal/dialog or combobox.
 *
 * For more information, see:
 * - https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboardinteraction
 * - https://www.w3.org/WAI/ARIA/apg/patterns/combobox/#keyboardinteraction
 */
export default {
  title: "Hooks/useCloseOnEscape",
  component: Demo,
  argTypes: {
    visible: {
      control: false,
      description: "The visibility state of an element.",
      table: { type: { summary: "boolean", required: true } },
    },
    onClose: {
      control: false,
      description:
        "A callback function fired when the element should be made not visible.",
      table: { type: { summary: "() => void", required: true } },
    },
    ref: {
      control: false,
      description:
        "A React `ref` object for an element to attach the event listener to.",
    },
    deps: {
      control: false,
      description:
        "If present, effect will run if the values in the list change.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof useCloseOnEscape>;

export const Default: Story = {};
