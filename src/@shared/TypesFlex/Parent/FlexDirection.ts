export const flexDirection = Object.freeze({
  row: "row",
  "row-reverse": "row-reverse",
  column: "column",
  "column-reverse": "column-reverse"
} as const);

/**
 * This establishes the main-axis, thus defining the direction flex items are placed in the flex container.
 * @remarks
 * flex-direction establishes the main-axis, thus defining the direction flex items
 * are placed in the flex container.
 * Flexbox is (aside from optional wrapping) a single-direction layout concept.
 * Think of flex items as primarily laying out either in horizontal rows or vertical columns.
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-direction
 *
 * @Properties
 * @Parent
 */

type FlexDirection = keyof typeof flexDirection;

export default FlexDirection;
