import {
  BrandColorTokens,
  UtilityColorTokens,
  brandColorTokens,
  utilityColorTokens,
} from "./color";
import { DimensionTokens, dimensionTokens } from "./dimension";

export interface StyleTokens
  extends DimensionTokens,
    BrandColorTokens,
    UtilityColorTokens {}

export const tokens: StyleTokens = {
  ...dimensionTokens,
  ...brandColorTokens,
  ...utilityColorTokens,
};
