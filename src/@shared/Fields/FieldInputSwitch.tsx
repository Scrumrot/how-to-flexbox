import { Controller, FieldValues } from "react-hook-form";
import { BaseFieldTypes } from "./types";
import SwitchInput, { SwitchInputProps } from "../Inputs/SwitchInput";

export type FieldInputSwitchProps<FormFields extends FieldValues> = Omit<
  SwitchInputProps,
  "inputRef" | "helperText" | "onBlur" | "value" | "onChange" | "isDirty"
> &
  BaseFieldTypes<FormFields> & {
    onChange?: SwitchInputProps["onChange"];
    hidden?: boolean;
    description?: string;
  };
export default function FieldInputSwitch<FormFields extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  rules,
  hidden,
  onChange: propsOnChange,
  ...rest
}: FieldInputSwitchProps<FormFields>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref } }) =>
        hidden ? (
          <></>
        ) : (
          <SwitchInput
            {...rest}
            onBlur={onBlur}
            onChange={(newValue) => {
              if (propsOnChange) {
                propsOnChange(newValue);
              }
              onChange(newValue);
            }}
            inputRef={ref}
            label={label}
            value={!!value}
          />
        )
      }
    />
  );
}
