import { ComponentPropsWithRef, ElementType } from "react";

/**
 * Utility type used to extend the props of a specific Element.
 */
export type PolymorphicProps<C extends ElementType> = {
  /** An HTML tag or React component to render instead of the component's default. The component will also support any props for this element type. */
  as?: C;
  /** The CSS `class` name to pass to the component. */
  className?: string;
} & ComponentPropsWithRef<C>;

/**
 * Utility type to extend an Element's props, but without allowing it to be polymorphic.
 */
export type ConstrainElement<I> = Omit<I, "as">;
