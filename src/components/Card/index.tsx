import { ElementType } from "react";

import { BaseElement } from "../../BaseElement";
import { PolymorphicProps } from "../../types/polymorphism";
import * as Styles from "./Card.styles";

export type CardProps<C extends ElementType = "div"> = PolymorphicProps<C> &
  Styles.CardStyleProps;

export const Card = <C extends ElementType = "div">({
  as = "div",
  isTranslucent,
  ...props
}: CardProps<C>) => (
  <BaseElement as={as} css={Styles.Main({ isTranslucent })} {...props} />
);
