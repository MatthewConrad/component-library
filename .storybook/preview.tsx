import { Global, css } from "@emotion/react";
import { Preview } from "@storybook/react";
import React from "react";

import { GlobalReset } from "../src/styles/GlobalReset";

const StorybookReset = () => (
  <Global
    styles={css`
      .docblock-argstable {
        input[type="radio"] {
          appearance: revert;
        }
      }
    `}
  />
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, c) => (
      <>
        {!c.title.toLowerCase().includes("globalreset") && (
          <>
            <GlobalReset />
            <StorybookReset />
          </>
        )}
        <Story />
      </>
    ),
  ],
};

export default preview;
