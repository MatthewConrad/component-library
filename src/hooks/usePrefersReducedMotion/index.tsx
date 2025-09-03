import { useMediaQuery } from "../useMediaQuery";

/**
 * Returns whether or not the user prefers reduced motion.
 *
 * Uses the hook `useMediaQuery` to match media against
 * `prefers-reduced-motion: no-preference`.
 */
export const usePrefersReducedMotion = () => {
  const noPreference = useMediaQuery("(prefers-reduced-motion: no-preference)");

  return !noPreference;
};
