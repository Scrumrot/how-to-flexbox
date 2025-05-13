import { Controller, FieldValues } from "react-hook-form";
import { BaseFieldTypes } from "./types";
import NumberInput, { NumberInputProps } from "../Inputs/NumberInput";

export type FieldInputNumberProps<FormFields extends FieldValues> = Omit<
  NumberInputProps,
  "inputRef" | "helperText" | "onBlur" | "value" | "onChange"
> &
  BaseFieldTypes<FormFields> & {
    maxValue?: number;
    minValue?: number;
    onChange?: NumberInputProps["onChange"];
    hidden?: boolean;
    description?: string;
  };

export default function FieldInputNumber<FormFields extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  rules,
  hidden,
  onChange: propsOnChange,
  ...rest
}: FieldInputNumberProps<FormFields>) {
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
          <NumberInput
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
            {...rest}
          />
        )
      }
    />
  );
}
