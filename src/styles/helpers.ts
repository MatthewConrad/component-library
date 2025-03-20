import { css } from "@emotion/react";

/**
 * Applies the default/preferred `box-sizing: border-box`.
 */
export const defaultBoxSizingStyles = css({
  boxSizing: "border-box",
});

/**
 * Applies reset styles to remove default margin; padding; border; outline; background;
 * and any platform-specific appearance.
 */
export const defaultAppearanceStyles = css({
  margin: 0,
  padding: 0,
  border: 0,
  outline: 0,
  background: "transparent",
  appearance: "none",
});

/**
 * Applies default font-styling.
 * Also sets font smoothing for better display in MacOS.
 */
export const defaultFontStyles = css({
  fontFamily: "sans-serif",
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
});

/**
 * Sets all default and reset styles.
 * Should only be used if it's not possible to use the `<GlobalReset />`
 */
export const resetHelper = css({
  ...defaultBoxSizingStyles,
  ...defaultAppearanceStyles,
  ...defaultFontStyles,
});

const ROOT_FONT_SIZE = 16;

/**
 * Converts a size in pixels to `rem` units, based on a root font size of 16 pixels.
 * @param size - the size in pixels
 * @returns the size in `rem` units
 */
export const rem = (size: number) => {
  if (size === 0) {
    return "0";
  }

  return `${size / ROOT_FONT_SIZE}rem`;
};

/**
 * Sets both height and width to the same value.
 *
 * @param size
 * @returns CSS declarations for `height` and `width` in `rem` units.
 */
export const square = (size: number) => css`
  height: ${rem(size)};
  width: ${rem(size)};
`;
