import { Global, css } from "@emotion/react";

import {
  defaultAppearanceStyles,
  defaultBoxSizingStyles,
  defaultFontStyles,
} from "../helpers";

const reset = css`
  *,
  *::before,
  *::after {
    ${defaultBoxSizingStyles}
  }

  * {
    ${defaultAppearanceStyles}
  }

  html,
  body {
    height: 100%;
  }

  body {
    ${defaultFontStyles}
  }

  img,
  picture,
  video,
  canas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: balance;
  }
`;

/**
 * Applies a global CSS reset.
 *
 * Note that the components in this library assume these styles are being applied. If you do _not_ use this reset,
 * components may not render properly.
 *
 * The rules here are based on Josh Comeau's CSS reset (https://www.joshwcomeau.com/css/custom-css-reset/), with
 * additions to:
 * - remove default outline
 * - remove default border
 * - remove platform-specific appearance
 * - set default font family and weight
 * - set default text colors
 * - set default transition timing function and duration
 */
export const GlobalReset = () => <Global styles={reset} />;
