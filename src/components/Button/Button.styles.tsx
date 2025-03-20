import { css } from "@emotion/react";

import { rem, square } from "../../styles/helpers";

export interface ButtonStyleProps {
  /** The size of the component. */
  size?: "small" | "default";
  /** Forces the component to a 1:1 aspect ratio. */
  isSquare?: boolean;
}

export const Main = ({ size = "default", isSquare }: ButtonStyleProps) => {
  const heightPx = size === "small" ? 32 : 40;

  const sizeDeclaration = isSquare
    ? square(heightPx)
    : css`
        height: ${rem(heightPx)};
      `;

  return css`
    ${sizeDeclaration}

    padding: 4px 8px;
    border-radius: ${rem(6)};

    background-color: lightblue;
  `;
};
