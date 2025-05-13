import {cssUnits, CssCalc} from '../TypeCssUnits';

export const flexBasisUnits = Object.freeze({
  'auto': 'auto',
  ...cssUnits
} as const)
export type FlexBasisUnits = keyof typeof flexBasisUnits |  CssCalc;

/** 
 * This defines the default size of an element before the remaining space is distributed.
 * @remarks
 * flex-basis can be a length (e.g. 20%, 5rem, etc.) or a keyword.
 * The auto keyword means “look at my width or height property” 
 * (which was temporarily done by the main-size keyword until deprecated).
 * The content keyword means “size it based on the item’s content” – 
 * this keyword isn’t well supported yet, so it’s hard to test and harder to 
 * know what its brethren max-content, min-content, and fit-content do.
 *
 * @Source
 *  https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-basis
 *
 * @Properties
 * @Parent
 */
type FlexBasis = `${number}${keyof typeof cssUnits}` | 'auto' | CssCalc;

export default FlexBasis;
