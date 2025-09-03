import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { vi } from "vitest";

import { useCloseOnOutsideClick } from ".";

const handleClose = vi.fn();

const TestElement = ({ visible }: { visible: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(visible, handleClose, ref);
  return (
    <>
      <div>content</div>
      <div ref={ref}>ref element</div>
    </>
  );
};

describe("useCloseOnOutsideClick", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  test("does not call onClose when click outside element if not visible", async () => {
    render(<TestElement visible={false} />);

    const otherElement = screen.getByText("content");
    expect(otherElement).toBeInTheDocument();
    await userEvent.click(otherElement);

    expect(handleClose).not.toHaveBeenCalled();
  });

  test("calls onClose when when click outside element if visible", async () => {
    render(<TestElement visible={true} />);

    const otherElement = screen.getByText("content");
    expect(otherElement).toBeInTheDocument();
    await userEvent.click(otherElement);

    expect(handleClose).toHaveBeenCalled();
  });

  test("does not call onClose when click inside element if visible", async () => {
    render(<TestElement visible={true} />);

    const refElement = screen.getByText("ref element");
    expect(refElement).toBeInTheDocument();
    await userEvent.click(refElement);

    expect(handleClose).not.toHaveBeenCalled();
  });
});
