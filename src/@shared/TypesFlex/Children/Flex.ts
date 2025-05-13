import FlexBasis from './FlexBasis';

/** Enables a flex context for all its direct children
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
type Flex = `${number} ${number} ${FlexBasis}`;

export default Flex;
