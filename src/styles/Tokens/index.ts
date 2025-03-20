import { Size } from "../../types/styles";

export type StyleTokens = {
  size: Record<Size, number>;
  spacing: Record<Size, number>;
  radius: Record<Size, number>;
};

export const tokens: StyleTokens = {
  size: {
    xsmall: 24,
    small: 32,
    medium: 40,
    large: 48,
    xlarge: 64,
  },
  spacing: {
    xsmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    xlarge: 24,
  },
  radius: {
    xsmall: 2,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 16,
  },
};
