export const display = Object.freeze({
  flex: "flex",
  "inline-flex": "inline-flex"
} as const);

/**
 * Enables a flex context for all its direct children
 *
 * @remarks
 * display: flex
 * defines a flex container; inline or block depending on the given value.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-properties-for-the-parentflex-container
 *
 * @Properties
 * @Parent
 */
type Display = keyof typeof display;

export default Display;
