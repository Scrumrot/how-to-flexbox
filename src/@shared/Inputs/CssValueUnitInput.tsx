import { ReactNode, useState } from "react";
import TextField, {
  BaseTextFieldProps,
  StandardTextFieldProps
} from "@mui/material/TextField";
import { cssUnits } from "../TypesFlex";
import InputAdornment from "@mui/material/InputAdornment";
import CssUnitSelectInput, {
  CssUnitsWithAuto
} from "./CssUnitSelectInput";
import InfoTitle from "./InfoTitle";
import { CssUnits, CssValueUnit } from "@shared";
// type RemoveIndex<T> = {
//   [ K in keyof T as string extends K ? never : number extends K ? never : K ] : T[K]
// };
type UnitKeys = Exclude<CssUnits, `calc(${string})`>;
export interface CssValueUnitInputProps extends BaseTextFieldProps {
  onChange: (value?: CssValueUnit) => void;
  onBlur: () => void;
  value?: CssValueUnit; // CssValueUnit
  inputRef: React.Ref<typeof TextField>;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  InputProps?: StandardTextFieldProps["InputProps"];
  description?: ReactNode;
}

function getUnit(value?: CssValueUnit): CssUnitsWithAuto {
  if (value === 0 || value === undefined) {
    return "px";
  }
  if(value.includes("calc")) {return "calc( )";}
  return (Object.keys(cssUnits) as UnitKeys[]).reduce<CssUnitsWithAuto>((val, unit)=> {
    const parseUnit = value.split(`${parseFloat(value)}`)[1]
    if(parseUnit === unit) {
      return unit
    }
    return val;
  }, 'auto');
  
}
function getNumberValue(value?: number | string): number | undefined | 'auto' | 'unset' | `calc(${string})` | string{
   const testValue = parseFloat(`${value}`);
   const isNumber = typeof testValue  === 'number' && !isNaN(testValue);
  if(isNumber) {return testValue;}
  if (value === 'auto' || value === 'unset' || `${value}`.includes("calc")) {
    return value as 'auto' | 'unset' | `calc(${string})`;
  }
  return undefined;
}
export default function CssValueUnitInput({
  sx,
  variant,
  onChange,
  description,
  label,
  InputProps,
  value,
  ...rest
}: CssValueUnitInputProps) {
  // const [unit, setUnit] = useState<CssUnitsWithAuto>(getUnit(value));
  // const [inputValue, setInputValue] = useState<ReturnType<typeof getNumberValue>>(getNumberValue(value));
  
  // function handleInputChange(value?: string ) {
  //   setInputValue(value);
  //   const floatValue = parseFloat(`${value}`);
  //   const isNumber = !isNaN(floatValue);
  //   if(isNumber) {
  //     if(unit === 'auto' || unit === 'unset' || unit === 'calc()' ) {
  //       setUnit(`px`);
  //       onChange(`${floatValue}px`);
  //       return;
  //     }
  //     onChange(`${floatValue}${unit as Exclude<CssUnits, `calc(${string})`>}`);
  //   }
  //   if(value === 'auto') {
  //     if(unit !== 'auto') {setUnit('auto');}
  //     onChange(value);
  //     return;
  //   }
  //   if(`${value}`.includes("calc")) {
  //     if(unit !== 'calc()') {
  //       setUnit('calc()');
  //     }
  //     onChange(value as `calc(${string})`);
  //     return;
  //   }
  //   if(value === 'unset') {
  //     if(unit !== 'unset') {
  //       setUnit('unset');
  //     }
  //     onChange('unset');
  //     return;
  //   }
  // }
  // function handleUnitChange(unitValue: CssUnitsWithAuto ) {
  //   setUnit(unitValue);
  //   if(unitValue === 'auto') {
  //     setInputValue('auto');
  //     onChange('auto');
  //     return; 
  //   }
  //   if(unitValue === 'calc()') {
  //     if(!`${inputValue}`.includes("calc")) {
  //       setInputValue('calc( )');
  //       onChange('calc( )');
  //     }
  //     return;
  //   }
  //   if(unitValue === 'unset') {
  //     setInputValue('unset');
  //     onChange('unset');
  //     return;
  //   }
  //   if(`${inputValue}`.includes("calc") || inputValue === 'unset' || inputValue === 'auto') {
  //     setInputValue(0);
  //     onChange(`${0}${unitValue}` as CssValueUnit );
  //   }
    
    
  // }
  
  return (
    <TextField
      variant={variant || "outlined"}
      size="small"
      value={value}
      label={
        description ? (
          <InfoTitle label={label} description={description} />
        ) : (
          label
        )
      }
      onChange={(event) => {
        onChange(event.target.value as CssValueUnit)
      }}
      InputProps={{
        ...(InputProps || {}),
        sx: { ...(InputProps?.sx || {}), cursor: "default" },
        // endAdornment: (
        //   <InputAdornment position="end">
        //     <CssUnitSelectInput
        //       value={unit}
        //       onChange={(newUnit) => {
        //         handleUnitChange(newUnit)
        //       }}
        //     />
        //   </InputAdornment>
        // )
      }}
      {...rest}
      sx={{ width: "100%", ...(sx || {}) }}
    />
  );
}
