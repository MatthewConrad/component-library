import { ComponentPropsWithRef } from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {}

export const Button = (props: ButtonProps) => <button {...props} />;

Button.displayName = "Button";
