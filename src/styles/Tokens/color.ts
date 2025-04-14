import { generateTokenGroup, generateTokens } from "./helpers";

export const SHADES = [5, 20, 30, 40, 50, 60, 80, 90, 95, 98] as const;
export type Shade = (typeof SHADES)[number];

export const PALETTES = [
  "ui",
  "accent",
  "critical",
  "notice",
  "success",
] as const;
export type Palette = (typeof PALETTES)[number];

export type BrandColorTokens = Record<Palette, Record<Shade, string>>;
export type ThemeBrandColorTokens = BrandColorTokens;

export type UtilityColorTokens = Record<"black" | "white", string>;
export type ThemeUtilityColorTokens = UtilityColorTokens;

export const brandColorTokens: BrandColorTokens = generateTokens(
  [[...PALETTES], SHADES.map((v) => `${v}`)],
  "color",
) as BrandColorTokens;

export const utilityColorTokens: UtilityColorTokens = generateTokenGroup(
  "utility",
  ["black", "white"],
  "color",
);

export const generatePaletteShadesHsl = (
  hue: number,
  saturation: number,
): Record<Shade, string> =>
  SHADES.reduce(
    (acc, shade) => ({ ...acc, [shade]: `hsl(${hue} ${saturation} ${shade})` }),
    {} as Record<Shade, string>,
  );

const DEFAULT_COLORS_HUE_SAT: Record<Palette, [number, number]> = {
  ui: [0, 0],
  accent: [207, 88],
  critical: [0, 0],
  notice: [0, 0],
  success: [0, 0],
};

export const DEFAULT_THEME_COLORS: ThemeBrandColorTokens = Object.entries(
  DEFAULT_COLORS_HUE_SAT,
).reduce(
  (acc, [palette, [hue, sat]]) => ({
    ...acc,
    [palette as Palette]: generatePaletteShadesHsl(hue, sat),
  }),
  {} as ThemeBrandColorTokens,
);

export const DEFAULT_UTILITY_COLORS: ThemeUtilityColorTokens = {
  black: "hsl(0 0 0)",
  white: "hsl(0 0 100)",
};
