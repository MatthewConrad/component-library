import { SerializedStyles, css } from "@emotion/react";

import { rem } from "./helpers";

type HeadlineText = "headlineS" | "headlineM" | "headlineL";
type BodyText = "bodyXS" | "bodyS" | "bodyM" | "bodyL";

/**
 * A valid key in `textSize`, `typeSetting`, or `font` helpers.
 */
export type TextSize = HeadlineText | BodyText;

/**
 * A set font-size/line-height combination.
 */
export interface TypeSetting {
  /** CSS property `font-size` for the type setting. */
  size: number;
  /** CSS property `line-height` for the type setting. */
  lineHeight: number;
}

/**
 * Raw values for pre-defined type settings.
 */
export const typeSettings: Record<TextSize, TypeSetting> = {
  headlineL: { size: 32, lineHeight: 48 },
  headlineM: { size: 24, lineHeight: 32 },
  headlineS: { size: 20, lineHeight: 24 },
  bodyL: { size: 16, lineHeight: 24 },
  bodyM: { size: 14, lineHeight: 22 },
  bodyS: { size: 12, lineHeight: 18 },
  bodyXS: { size: 10, lineHeight: 18 },
} as const;

/**
 * Preset declarations for `font-size` and `line-height`.
 * If also setting `font-weight`, consider using the `font` helper instead.
 */
export const textSize = Object.fromEntries(
  Object.entries(typeSettings).map(([key, value]) => [
    key,
    css`
      font-size: ${rem(value.size)};
      line-height: ${rem(value.lineHeight)};
    `,
  ]),
) as { [T in TextSize]: SerializedStyles };

/**
 * Named values for `font-weight`.
 * If also setting `font-size` and `line-height`, consider using the `font` helper instead.
 */
export const fontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  black: 900,
} as const;

/**
 * A valid key in the `fontWeight` helper.
 */
export type FontWeight = keyof typeof fontWeight;

/**
 * Preset CSS declarations for font-size, line-height, and font-weight.
 */
export const font = Object.fromEntries(
  Object.entries(textSize).map(([key, textSizeDeclaration]) => {
    const weights = Object.entries(fontWeight).map(
      ([weightKey, weightValue]) => {
        return [
          weightKey,
          css`
            ${textSizeDeclaration} font-weight: ${weightValue};
          `,
        ];
      },
    );

    return [key, Object.fromEntries(weights)];
  }),
) as { [T in TextSize]: { [W in FontWeight]: string } };
