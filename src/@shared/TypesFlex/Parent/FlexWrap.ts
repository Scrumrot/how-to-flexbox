export const flexWrap = Object.freeze({
  nowrap: "nowrap",
  wrap: "wrap",
  "wrap-reverse": "wrap-reverse"
} as const);

/**
 *
 * @Remarks
 * flex-wrap allows the items to wrap as needed.
 * By default, flex items will all try to fit onto one line.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content
 *
 * @Properties
 * @Parent
 */
/** flex-wrap
By default, flex items will all try to fit onto one line.
You can change that and allow the items to wrap as needed with this property.
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap
 */

type FlexWrap = keyof typeof flexWrap;

export default FlexWrap;
