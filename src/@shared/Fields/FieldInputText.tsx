import { Controller, FieldValues } from "react-hook-form";
import TextInput, { TextInputProps } from "../Inputs/TextInput";
import { BaseFieldTypes } from "./types";

interface BaseFieldInputTextProps
  extends Omit<
    TextInputProps,
    "inputRef" | "helperText" | "onBlur" | "value" | "onChange"
  > {
  label?: React.ReactNode;
  onChange?: TextInputProps["onChange"];
  hidden?: boolean;
  description?: string;
}

export type FieldInputTextProps<
  FormFields extends FieldValues
> = BaseFieldInputTextProps & BaseFieldTypes<FormFields>;

export default function FieldInputText<FormFields extends FieldValues>({
  name,
  label,
  control,
  onChange: propsOnChange,
  defaultValue,
  rules,
  hidden,
  ...rest
}: FieldInputTextProps<FormFields>) {
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
          <TextInput
            onBlur={onBlur}
            onChange={(newValue) => {
              if (propsOnChange) {
                propsOnChange(newValue);
              }
              onChange(newValue);
            }}
            inputRef={ref}
            label={label}
            value={value as string}
            helperText={error ? error.message : ""}
            error={!!error}
            {...rest}
          />
        )
      }
    />
  );
}
