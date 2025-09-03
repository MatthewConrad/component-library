import { useBoolean } from ".";
import { act, renderHook } from "../../tests/utils";

describe("useBoolean", () => {
  test("should return standard useState values", () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.value).toBe(false);

    act(() => {
      result.current.setValue(true);
    });

    expect(result.current.value).toBe(true);
  });

  test("should set true when call setTrue", () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.value).toBe(false);

    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  });

  test("should set false when call setFalse", () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  });

  test("should toggle value when call toggle", () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);
  });
});
