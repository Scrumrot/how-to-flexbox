import { ReactNode } from "react";
import {
  TextField,
  BaseTextFieldProps,
  StandardTextFieldProps
} from "@mui/material";
import { stringToInt } from "../utils";
import InfoTitle from "./InfoTitle";
function stringToFloat(value: string, limit: number): number | undefined {
  const number = parseFloat(value);
  if (!isNaN(number)) {
    return parseFloat(number.toFixed(limit));
  }
  return undefined;
}

export interface NumberInputProps extends BaseTextFieldProps {
  onChange: (value?: number) => void;
  onBlur?: () => void;
  value?: number;
  inputRef?: React.Ref<typeof TextField>;
  helperText?: ReactNode;
  label?: ReactNode;
  step?: number;
  min?: number;
  max?: number;
  /** If float is given component will use Number(Number.parseFloat(value).toFixed(limit)); */
  float?: number;
  InputProps?: StandardTextFieldProps["InputProps"];
  description?: ReactNode;
}
export default function NumberInput({
  sx,
  inputProps,
  step = 1,
  min,
  max,
  onChange,
  float,
  description,
  label,
  ...rest
}: NumberInputProps) {
  return (
    <TextField
      variant="outlined"
      size="small"
      {...rest}
      sx={{ width: "100%", mt: "0px", ...(sx || {}) }}
      label={
        description ? (
          <InfoTitle label={label} description={description} />
        ) : (
          label
        )
      }
      onChange={(e) => {
        const value = e.target.value;
        if (value && float) {
          onChange(stringToFloat(value, float));
          return;
        }
        if (value) {
          onChange(stringToInt(value));
          return;
        }
        onChange(undefined);
      }}
      inputProps={{
        ...inputProps,
        type: "number",
        step: step,
        min: min,
        max: max,
        pattern: "[0-9 - ]*"
      }}
    />
  );
}
