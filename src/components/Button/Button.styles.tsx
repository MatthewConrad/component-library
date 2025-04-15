import { css } from "@emotion/react";

import { tokens } from "../../styles/Tokens";
import { rem, square } from "../../styles/helpers";

import { SizeProps } from "../../types/styles";

export interface ButtonStyleProps extends SizeProps {
  /** Forces the component to a 1:1 aspect ratio. */
  isSquare?: boolean;
}

export const Main = ({ size = "medium", isSquare }: ButtonStyleProps) => {
  const height = tokens.dimension.size[size];

  const sizeDeclaration = isSquare
    ? square(height)
    : css`
        height: ${height};
      `;

  return css`
    ${sizeDeclaration}

    padding: 4px 8px;
    border-radius: ${rem(6)};

    background-color: lightblue;
  `;
};
