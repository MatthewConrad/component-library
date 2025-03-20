import { BaseElement } from "../../BaseElement";
import { PolymorphicProps } from "../../types/polymorphism";
import * as Styles from "./Button.styles";

export interface ButtonProps
  extends PolymorphicProps<"button">,
    Styles.ButtonStyleProps {}

export const Button = ({ size, isSquare, ...props }: ButtonProps) => (
  <BaseElement as="button" css={Styles.Main({ size, isSquare })} {...props} />
);

Button.displayName = "Button";
