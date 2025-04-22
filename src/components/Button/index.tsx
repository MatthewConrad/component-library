import { BaseElement } from "../../BaseElement";
import { PolymorphicProps } from "../../types/polymorphism";
import * as Styles from "./Button.styles";

export interface ButtonProps
  extends PolymorphicProps<"button">,
    Styles.ButtonStyleProps {}

export const Button = ({ size, palette, isSquare, ...props }: ButtonProps) => (
  <BaseElement
    as="button"
    css={Styles.Main({ size, palette, isSquare })}
    {...props}
  />
);

Button.displayName = "Button";
