import { rem } from "./helpers";

/**
 * Rough breakpoints for common screen types.
 */
export const BREAKPOINTS = {
  mobile: 360,
  tablet: 640,
  laptop: 960,
  desktop: 1280,
} as const;

export const getFromBreakpoint = (breakpoint: number) =>
  `only screen and (min-width: ${rem(breakpoint)})`;

export const getUntilBreakpoint = (breakpoint: number) =>
  `only screen and (max-width: ${rem(breakpoint)})`;

export const mediaQueryConditions = {
  whileHover: `(hover: hover)`,
  whileTouch: `(hover:none) and (pointer:coarse)`,
  fromMobile: getFromBreakpoint(BREAKPOINTS.mobile),
  fromTablet: getFromBreakpoint(BREAKPOINTS.tablet),
  fromLaptop: getFromBreakpoint(BREAKPOINTS.laptop),
  fromDesktop: getFromBreakpoint(BREAKPOINTS.desktop),
  untilMobile: getUntilBreakpoint(BREAKPOINTS.mobile),
  untilTablet: getUntilBreakpoint(BREAKPOINTS.tablet),
  untilLaptop: getUntilBreakpoint(BREAKPOINTS.laptop),
  untilDesktop: getUntilBreakpoint(BREAKPOINTS.desktop),
};

export const mediaQueries = Object.fromEntries(
  Object.entries(mediaQueryConditions).map(([key, value]) => [
    key,
    `@media ${value}`,
  ]),
);
