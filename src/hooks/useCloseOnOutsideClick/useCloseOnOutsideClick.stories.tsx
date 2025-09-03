import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";

import { Button } from "../../components/Button";
import { UICard } from "../../components/UICard";

import { useCloseOnOutsideClick } from ".";
import { useIsVisible } from "../useIsVisible";

const Demo = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const { isVisible, setVisible, setNotVisible } = useIsVisible(false);
  useCloseOnOutsideClick(isVisible, setNotVisible, elementRef);

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
      {isVisible && (
        <UICard tempoRef={elementRef}>Click outside to hide.</UICard>
      )}
    </div>
  );
};

/**
 * Sets an event listener to execute a callback function when clicking outside an element.
 * Typically used to help manage visibility of a modal/dialog or combobox.
 */
export default {
  title: "Hooks/useCloseOnOutsideClick",
  component: Demo,
  argTypes: {
    visible: {
      control: false,
      description: "The visibility state of the element.",
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

type Story = StoryObj<typeof useCloseOnOutsideClick>;

export const Default: Story = {};
