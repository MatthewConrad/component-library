import { useMemo, useState } from "react";

/**
 * Simplifies state management of a boolean value.
 *
 * In addition to the standard `value` and `setValue` from `useState`,
 * this hook also returns dedicated functions:
 * - `setTrue`
 * - `setFalse`
 * - `toggle`
 *
 * @param initialValue The initial state value.
 */
export const useBoolean = (initialValue?: boolean) => {
  const [value, setValue] = useState(initialValue ?? false);

  const { setTrue, setFalse, toggle } = useMemo(
    () => ({
      setTrue: () => setValue(true),
      setFalse: () => setValue(false),
      toggle: () => setValue((v) => !v),
    }),
    [],
  );

  return { value, setValue, setTrue, setFalse, toggle };
};
