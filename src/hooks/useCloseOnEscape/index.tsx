import { DependencyList, RefObject, useEffect } from "react";

/**
 * Sets an event listener to execute a callback function when the "Escape" key is pressed.
 * Typically used to help manage visibility of a modal/dialog or combobox.
 *
 * For more information, see:
 * - https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboardinteraction
 * - https://www.w3.org/WAI/ARIA/apg/patterns/combobox/#keyboardinteraction
 *
 * @param isVisible The visibility state of an element.
 * @param onClose A callback function fired when the element should be made not visible.
 * @param refObject A React `ref` object for an element to attach the event listener to.
 * @param deps If present, effect will run if the values in the list change.
 */
export const useCloseOnEscape = (
  isVisible: boolean,
  onClose: () => void,
  refObject?: RefObject<HTMLElement>,
  deps?: DependencyList,
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVisible) {
        switch (e.key) {
          case "Escape":
            onClose();
            e.preventDefault();
            e.stopPropagation();
            break;
          default:
            break;
        }
      }
    };

    const element =
      refObject && refObject.current ? refObject.current : document;
    element.addEventListener("keydown", handleKeyDown as EventListener);

    return () =>
      element.removeEventListener("keydown", handleKeyDown as EventListener);
  }, [isVisible, onClose, refObject, deps]);
};
