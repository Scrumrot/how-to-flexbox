import { Controller, FieldValues } from "react-hook-form";
import { BaseFieldTypes } from "./types";
import SliderInput, { SliderInputProps } from "../Inputs/SliderInput";

export type FieldInputSliderProps<FormFields extends FieldValues> = Omit<
  SliderInputProps,
  "inputRef" | "helperText" | "onBlur" | "value" | "onChange" | "isDirty"
> &
  BaseFieldTypes<FormFields> & {
    onChange?: SliderInputProps["onChange"];
    hidden?: boolean;
    description?: string;
  };

export default function FieldInputSlider<FormFields extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  rules,
  hidden,
  onChange: propsOnChange,
  ...rest
}: FieldInputSliderProps<FormFields>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
      }) =>
        hidden ? (
          <></>
        ) : (
          <SliderInput
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
            value={value as number}
            helperText={error ? error.message : ""}
            error={!!error}
          />
        )
      }
    />
  );
}
