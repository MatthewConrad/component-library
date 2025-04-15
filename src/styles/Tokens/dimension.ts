import { rem } from "../helpers";
import { generateTokens } from "./helpers";

const SIZES = ["xsmall", "small", "medium", "large", "xlarge"] as const;
const DIMENSIONS = ["size", "spacing", "radius"] as const;

/** Variants for dimensions and related tokens. */
export type Size = (typeof SIZES)[number];

type Dimension = (typeof DIMENSIONS)[number];

export type DimensionTokens = Record<Dimension, Record<Size, string>>;
export type ThemeDimensionTokens = DimensionTokens;

export const dimensionTokens: DimensionTokens = generateTokens(
  [[...DIMENSIONS], [...SIZES]],
  "dimension",
) as DimensionTokens;

export const DEFAULT_DIMENSIONS: ThemeDimensionTokens = {
  size: {
    xsmall: rem(24),
    small: rem(32),
    medium: rem(40),
    large: rem(48),
    xlarge: rem(64),
  },
  spacing: {
    xsmall: `4px`,
    small: `8px`,
    medium: `12px`,
    large: `16px`,
    xlarge: `24px`,
  },
  radius: {
    xsmall: rem(2),
    small: rem(4),
    medium: rem(6),
    large: rem(8),
    xlarge: rem(16),
  },
};
