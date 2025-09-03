import { DependencyList, RefObject, useEffect } from "react";

/**
 * Sets an event listener to execute a callback function when clicking outside an element.
 * Typically used to help manage visibility of a modal/dialog or combobox.
 *
 * @param isVisible - The visibility state of the element.
 * @param onClose - A callback function fired when the element should be made not visible.
 * @param refObject - A React `ref` object for the element to attach the event listener to.
 * @param deps - If present, effect will run if the values in the list change.
 */
export const useCloseOnOutsideClick = (
  isVisible: boolean,
  onClose: () => void,
  refObject: RefObject<HTMLElement>,
  deps?: DependencyList,
) => {
  useEffect(() => {
    const checkForClickOutside = (e: MouseEvent) => {
      if (
        refObject.current &&
        !refObject.current.contains(e.target as Element)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", checkForClickOutside);
    } else {
      document.removeEventListener("mousedown", checkForClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", checkForClickOutside);
    };
  }, [refObject, isVisible, onClose, deps]);
};
