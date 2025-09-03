import { useBoolean } from "../useBoolean";

/**
 * Simplifies state management of a boolean value meant to track visibility.
 *
 * In addition to the standard `value` and `setValue` from `useState`,
 * this hook also returns dedicated functions:
 * - `setVisible`
 * - `setNotVisible`
 * - `toggleVisibility`
 *
 * Behind the scenes, this hook is only renaming the return values of the hook `useBoolean`.
 */
export const useIsVisible = (initialValue?: boolean) => {
  const { value, setValue, setTrue, setFalse, toggle } =
    useBoolean(initialValue);

  return {
    isVisible: value,
    setIsVisible: setValue,
    setVisible: setTrue,
    setNotVisible: setFalse,
    toggleVisibility: toggle,
  };
};
