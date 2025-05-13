import {cssUnits, CssCalc} from '../TypeCssUnits';

export const gap = Object.freeze({
  ...cssUnits
} as const);

/**
 * This explicitly controls the space between flex items.
 *
 * @Remarks
 * Applies spacing only between items not on the outer edges.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-gap
 *
 * @Properties
 * @Parent
 */

type Gap = `${number}${keyof typeof cssUnits}` | CssCalc | 0;

export default Gap;
