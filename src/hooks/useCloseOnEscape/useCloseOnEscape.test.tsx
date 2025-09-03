import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { vi } from "vitest";

import { useCloseOnEscape } from ".";

const handleClose = vi.fn();

const TestElement = ({
  visible,
  setOnRef,
}: {
  visible: boolean;
  setOnRef?: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  useCloseOnEscape(visible, handleClose, setOnRef ? ref : undefined);
  return <button ref={ref}>content</button>;
};

describe("useCloseOnEscape", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  test("does not call onClose when esc key pressed if not visible", async () => {
    render(<TestElement visible={false} />);

    expect(screen.getByText("content")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");

    expect(handleClose).not.toHaveBeenCalled();
  });

  test("calls onClose when esc key pressed if visible", async () => {
    render(<TestElement visible={true} />);

    expect(screen.getByText("content")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");

    expect(handleClose).toHaveBeenCalled();
  });

  test("does not call onClose when other keys pressed if visible", async () => {
    render(<TestElement visible={true} />);

    expect(screen.getByText("content")).toBeInTheDocument();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard("{ArrowLeft}");

    expect(handleClose).not.toHaveBeenCalled();
  });

  test("sets listener on ref element if provided", async () => {
    render(<TestElement visible setOnRef />);

    await userEvent.keyboard("{Escape}");
    expect(handleClose).not.toHaveBeenCalled();

    await userEvent.tab();
    await userEvent.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalled();
  });
});
