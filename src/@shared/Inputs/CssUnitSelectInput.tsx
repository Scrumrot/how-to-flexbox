import { ReactNode } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { CssUnits, cssUnits } from "../TypesFlex";
import { makeOptions } from "../utils";
import InfoAdornment from "./InfoAdornment";
import { MakeOptionsType } from "@shared";
export type CssUnitsWithAuto = CssUnits | "auto" | "unset";
export const cssUnitOptions = makeOptions(
  Object.values<CssUnitsWithAuto>({
    ...cssUnits,
    auto: "auto",
    "calc( )": "calc( )",
    unset: "unset"
  })
);
type CssUnitOption = MakeOptionsType<CssUnitsWithAuto>;

export interface CssUnitSelectInputProps
  extends Omit<TextFieldProps, "onChange" | "options"> {
  onChange: (value: CssUnitsWithAuto) => void;
  value: CssUnitsWithAuto;
  inputRef?: React.Ref<typeof TextField>;
  label?: ReactNode;
  optionsFilter?: (
    value: CssUnitOption[]
  ) => { label: CssUnitsWithAuto; key: CssUnitsWithAuto }[];
  description?: ReactNode;
}

export default function CssUnitSelectInput({
  onChange,
  value,
  inputRef,
  label,
  optionsFilter,
  sx,
  disabled,
  id,
  style,
  className,
  description,
  InputProps,
  ...rest
}: CssUnitSelectInputProps) {
  const fieldOtions = optionsFilter
    ? optionsFilter(cssUnitOptions)
    : cssUnitOptions;
  const startAdornment = description
    ? {
        startAdornment: <InfoAdornment title={description} />
      }
    : {};
  return (
    <TextField
      {...rest}
      select
      id={id}
      style={style}
      className={className}
      sx={{ width: "100%", ...(sx || {}) }}
      label={label}
      value={value}
      onChange={(event) => {
        const {
          target: { value }
        } = event;
        onChange(value as CssUnits);
      }}
      disabled={!fieldOtions.length || disabled}
      inputRef={inputRef}
      variant="standard"
      size="small"
      InputProps={{
        ...(InputProps || {}),
        sx: { ...(InputProps?.sx || {}), cursor: "default" },
        ...startAdornment
      }}
      SelectProps={
        {
          // native: true,
          // multiple
        }
      }
    >
      {fieldOtions.map((option) => (
        <MenuItem value={option.key} key={option.key}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
