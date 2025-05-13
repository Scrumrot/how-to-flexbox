export const alignSelf = Object.freeze({
  auto: "auto",
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
} as const);

/**
 * This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
 *
 * @remarks
 * Float, clear and vertical-align have no effect on a flex item.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-self
 *
 * @Properties
 * @Parent
 */
type AlignSelf = keyof typeof alignSelf;

export default AlignSelf;
