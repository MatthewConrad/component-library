import { setMedia } from "mock-match-media";

import { usePrefersReducedMotion } from ".";
import { renderHook } from "../../tests/utils";

describe("usePrefersReducedMotion", () => {
  test("should return false when no motion preference", () => {
    setMedia({ prefersReducedMotion: "no-preference" });
    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);
  });

  test("should return true if prefers reduced", () => {
    setMedia({ prefersReducedMotion: "reduce" });

    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(true);
  });
});
