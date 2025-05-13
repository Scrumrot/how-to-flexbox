export const alignItems = Object.freeze({
  stretch: "stretch",
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  baseline: "baseline"
} as const);

/**
 * This defines the default behavior for how flex items are laid out along the cross axis on the current line.
 *
 * @Remarks
 * Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items
 *
 * @Properties
 * @Parent
 */

type AlignItems = keyof typeof alignItems;

export default AlignItems;
