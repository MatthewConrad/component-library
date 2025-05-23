import { css } from "@emotion/react";
import { Meta, StoryObj } from "@storybook/react";

import { tokens } from ".";
import { rem, square } from "../helpers";

export default {
  title: "Styles/Tokens",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} as Meta;

/**
 * A collection of style tokens used in the component library.
 */
export const Default: StoryObj = {
  render: () => (
    <>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {Object.entries(tokens.dimension.size).map(([key, value]) => (
          <div
            key={`tokens-size-${key}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>{key}</h3>
            <div
              css={css`
                ${square(value)}
                border-radius: ${rem(4)};
                outline: 1px solid black;
              `}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {Object.entries(tokens.brandColor).map(([palette, shades]) => (
          <div
            key={`tokens-brandcolor-${palette}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>{palette}</h3>
            <div style={{ display: "flex" }}>
              {Object.entries(shades).map(([shade, value]) => {
                return (
                  <div
                    key={`${palette}-${shade}`}
                    css={css`
                      ${square(32)}
                      background-color: ${value};
                    `}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  ),
};
