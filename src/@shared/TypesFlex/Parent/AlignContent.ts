export const alignContent = Object.freeze({
  normal: "normal",
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
  stretch: "stretch"
} as const);

/**
 * This aligns a flex container’s lines within when there is extra space in the cross-axis.
 *
 * @Remarks
 * This is similar to how justify-content aligns individual items within the main-axis.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-content
 *
 * @Properties
 * @Parent
 */

type AlignContent = keyof typeof alignContent;

export default AlignContent;
