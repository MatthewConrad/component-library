import {
  BrandColorTokens,
  DEFAULT_THEME_COLORS,
  DEFAULT_UTILITY_COLORS,
  ThemeBrandColorTokens,
  ThemeUtilityColorTokens,
  UtilityColorTokens,
  brandColorTokens,
  utilityColorTokens,
} from "./color";
import {
  DEFAULT_DIMENSIONS,
  DimensionTokens,
  ThemeDimensionTokens,
  dimensionTokens,
} from "./dimension";

export interface StyleTokens {
  dimension: DimensionTokens;
  brandColor: BrandColorTokens;
  utilityColor: UtilityColorTokens;
}

export interface ThemeTokenValues {
  dimension: ThemeDimensionTokens;
  brandColor: ThemeBrandColorTokens;
  utilityColor: ThemeUtilityColorTokens;
}

export const tokens: StyleTokens = {
  dimension: dimensionTokens,
  brandColor: brandColorTokens,
  utilityColor: utilityColorTokens,
};

export const DEFAULT_TOKEN_VALUES: ThemeTokenValues = {
  dimension: DEFAULT_DIMENSIONS,
  brandColor: DEFAULT_THEME_COLORS,
  utilityColor: DEFAULT_UTILITY_COLORS,
};
