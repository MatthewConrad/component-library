import { ComponentPropsWithRef } from "react";

import { Main } from "./Button.styles";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}

export const Button = (props: ButtonProps) => <Main {...props} />;

Button.displayName = "Button";
