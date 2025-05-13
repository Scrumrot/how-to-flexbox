import { Controller, FieldValues } from "react-hook-form";
import { BaseFieldTypes } from "./types";
import SelectInput, { SelectInputProps } from "../Inputs/SelectInput";

export type FieldInputSelectProps<FormFields extends FieldValues> = Omit<
  SelectInputProps,
  "inputRef" | "onBlur" | "value" | "onChange"
> &
  BaseFieldTypes<FormFields> & {
    onChange?: SelectInputProps["onChange"];
    hidden?: boolean;
    description?: string;
  };

export default function FieldInputSelect<FormFields extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  rules,
  hidden,
  onChange: propsOnChange,
  ...rest
}: FieldInputSelectProps<FormFields>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value, ref } }) =>
        hidden ? (
          <></>
        ) : (
          <SelectInput
            onChange={(newValue) => {
              if (propsOnChange) {
                propsOnChange(newValue);
              }
              onChange(newValue);
            }}
            label={label}
            inputRef={ref}
            value={value as string}
            {...rest}
          />
        )
      }
    />
  );
}
