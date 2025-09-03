import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setMedia } from "mock-match-media";
import { vi } from "vitest";

import { mediaQueryConditions } from "../../styles/mediaQuery";

import { useMediaQuery } from ".";

const handleCallback = vi.fn();

// Ordinarily, would use `renderHook` instead of defining this whole component-under-test,
// but updating the mock state outside of the component
// for the updates-match-on-change case causes `act` warnings, which I loathe!
const UseSingleMQExample = ({ useCallback }: { useCallback?: boolean }) => {
  const isTouch = useMediaQuery(
    mediaQueryConditions.whileTouch,
    useCallback ? handleCallback : undefined,
  );

  return (
    <>
      <div>{`${isTouch}`}</div>
      <button
        onClick={() => {
          setMedia({ hover: "hover" });
        }}
      >
        update media
      </button>
    </>
  );
};

describe("useMediaQuery", () => {
  beforeEach(() => {
    setMedia({ hover: "none", pointer: "coarse" });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("returns match", () => {
    render(<UseSingleMQExample />);
    expect(screen.getByText("true")).toBeInTheDocument();
  });

  test("calls callback when match if configured", () => {
    render(<UseSingleMQExample useCallback={true} />);
    expect(handleCallback).toHaveBeenCalled();
  });

  test("updates match on change", async () => {
    render(<UseSingleMQExample />);
    expect(screen.getByText("true")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "update media" }));

    expect(screen.getByText("false"));
  });
});
