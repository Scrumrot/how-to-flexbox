import { ReactNode } from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel, {
  FormControlLabelProps
} from "@mui/material/FormControlLabel";
export interface SwitchInputProps
  extends Omit<SwitchProps, "checked" | "onChange" | "defaultValue"> {
  value?: boolean;
  inputRef?: React.Ref<typeof Switch>;
  helperText?: string;
  label?: FormControlLabelProps["label"];
  onChange: (value: boolean) => void;
  labelPlacement?: "bottom" | "end" | "start" | "top";
  description?: ReactNode;
}
export default function SwitchInput({
  label,
  value,
  inputRef,
  sx,
  onChange,
  labelPlacement,
  ...rest
}: SwitchInputProps) {
  const switchInput = (
    <Switch
      inputRef={inputRef}
      sx={{ flex: "1 1 auto" }}
      {...rest}
      checked={value}
      onChange={(event, value) => {
        onChange(value);
      }}
    />
  );

  return label ? (
    <FormControlLabel
      control={switchInput}
      label={label}
      labelPlacement={labelPlacement}
      sx={{ m: 0, ...sx }}
    />
  ) : (
    switchInput
  );
}
