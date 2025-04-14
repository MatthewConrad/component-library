import { generateTokens } from "./helpers";

const SIZES = ["xsmall", "small", "medium", "large", "xlarge"] as const;
const DIMENSIONS = ["size", "spacing", "radius"] as const;

/** Variants for dimensions and related tokens. */
export type Size = (typeof SIZES)[number];

type Dimension = (typeof DIMENSIONS)[number];

export type DimensionTokens = Record<Dimension, Record<Size, string>>;
export type ThemeDimensionTokens = Record<Dimension, Record<Size, number>>;

export const dimensionTokens: DimensionTokens = generateTokens([
  [...DIMENSIONS],
  [...SIZES],
]) as DimensionTokens;

export const DEFAULT_DIMENSIONS: ThemeDimensionTokens = {
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
