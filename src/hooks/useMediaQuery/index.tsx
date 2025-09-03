import { DependencyList, useEffect, useState } from "react";

/**
 * Uses `window.matchMedia` to determine whether or not a single media query condition is true.
 *
 * @param query A valid CSS `@media` query string to check for.
 * @param callback A callback function fired when the match status changes.
 * @param deps If present, hook will re-run if the values in the list change.
 */
export const useMediaQuery = (
  query: string,
  callback?: (match: boolean) => void,
  deps?: DependencyList,
) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const matcher = window.matchMedia(query);
    const listener = () => {
      const isMatch = matcher.matches;
      setMatches(isMatch);

      if (callback) {
        callback(isMatch);
      }
    };

    matcher.addEventListener("change", listener);

    // Initial run
    listener();

    return () => {
      matcher.removeEventListener("change", listener);
    };
  }, [callback, query, deps]);

  return matches;
};
