import CssUnits from './TypeCssUnits';
type CssValueUnit =  `${number}${Exclude<CssUnits, `calc(${string})`>}` | `calc(${string})` | 'auto' | 'unset' | 0;

export default CssValueUnit;