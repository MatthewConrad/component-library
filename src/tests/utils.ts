import { RenderOptions, render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactNode } from "react";

export * from "@testing-library/react";

export const render = (ui: ReactNode, options?: RenderOptions) => ({
  user: userEvent.setup(),
  ...rtlRender(ui, options),
});
