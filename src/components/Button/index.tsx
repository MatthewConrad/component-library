import { BaseElement } from "../../BaseElement";
import { PolymorphicProps } from "../../types/polymorphism";
import * as Styles from "./Button.styles";

export interface ButtonProps extends PolymorphicProps<"button"> {}

export const Button = (props: ButtonProps) => (
  <BaseElement as="button" css={Styles.Main} {...props} />
);

Button.displayName = "Button";
