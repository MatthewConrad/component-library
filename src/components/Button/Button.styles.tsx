import { css } from "@emotion/react";

import { tokens } from "../../styles/Tokens";
import { Palette } from "../../styles/Tokens/color";
import { rem, square } from "../../styles/helpers";

import { PaletteProps, SizeProps } from "../../types/styles";

export interface ButtonStyleProps extends SizeProps, PaletteProps {
  /** Forces the component to a 1:1 aspect ratio. */
  isSquare?: boolean;
}

const paletteColors: Record<Palette, string> = {
  ui: tokens.brandColor.ui[90],
  brand: tokens.brandColor.brand[40],
  accent: tokens.brandColor.accent[80],
  critical: tokens.brandColor.critical[50],
  notice: tokens.brandColor.notice[50],
  success: tokens.brandColor.success[40],
};

export const Main = ({
  size = "medium",
  palette = "brand",
  isSquare,
}: ButtonStyleProps) => {
  const height = tokens.dimension.size[size];

  const sizeDeclaration = isSquare
    ? square(height)
    : css`
        height: ${height};
      `;

  return css`
    ${sizeDeclaration}

    padding: 4px 12px;
    border-radius: ${rem(6)};

    font-weight: bold;

    color: ${tokens.utilityColor.white};
    background-color: ${paletteColors[palette]};
  `;
};
