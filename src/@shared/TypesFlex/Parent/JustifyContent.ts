export const justifyContent = Object.freeze({
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly"
} as const);

/**
 * This defines the alignment along the main axis.
 *
 * @Remarks
 * justify-content helps distribute extra free space leftover when either all the
 * flex items on a line are inflexible, or are flexible but have reached their maximum size.
 * It also exerts some control over the alignment of items when they overflow the line.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content
 *
 * @Properties
 * @Parent
 */

type JustifyContent = keyof typeof justifyContent;

export default JustifyContent;
