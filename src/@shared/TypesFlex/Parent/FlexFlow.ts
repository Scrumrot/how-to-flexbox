import FlexDirection from './FlexDirection';
import FlexWrap from './FlexWrap';

/** FlexFlow
This is a shorthand for the flex-direction and flex-wrap properties, 
which together define the flex container’s main and cross axes.
The default value is row nowrap.
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-flow

 */

type FlexFlow = `${FlexDirection} ${FlexWrap}`;

export default FlexFlow;
