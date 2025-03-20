import { ElementType } from "react";

import { PolymorphicProps } from "./types/polymorphism";

export const BaseElement = <C extends ElementType = "div">({
  as: Element = "div",
  ...props
}: PolymorphicProps<C>) => <Element {...props} />;
