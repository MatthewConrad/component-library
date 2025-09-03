import { css } from "@emotion/react";

import { tokens } from "../../styles/Tokens";
import { rem } from "../../styles/helpers";

import { PaletteProps } from "../../types/styles";

export interface CardStyleProps extends PaletteProps {
  /** Renders the card with a translucent background, blurring content behind it. */
  isTranslucent?: boolean;
}

export const Main = ({ isTranslucent }: CardStyleProps) => {
  return css`
    padding: 16px;
    border-radius: ${rem(6)};

    color: ${tokens.utilityColor.black};
    background-color: ${tokens.utilityColor.white};

    border: 1px solid ${tokens.brandColor.ui[20]};

    ${isTranslucent &&
    css`
      backdrop-filter: blur(4px);
      opacity: 0.8;
    `}
  `;
};
