import { Controller, FieldValues } from "react-hook-form";
import CssValueUnitInput, {
  CssValueUnitInputProps
} from "../Inputs/CssValueUnitInput";
import { BaseFieldTypes } from "./types";
import type { CssValueUnit } from "@shared";
import { ReactNode } from "react";

interface BaseFieldInputCssValueUnitProps
  extends Omit<
    CssValueUnitInputProps,
    "inputRef" | "helperText" | "onBlur" | "value" | "onChange"
  > {
  label?: ReactNode;
  onChange?: CssValueUnitInputProps["onChange"];
  hidden?: boolean;
  description?: ReactNode;
}

export type FieldInputCssValueUnitProps<
  FormFields extends FieldValues
> = BaseFieldInputCssValueUnitProps & BaseFieldTypes<FormFields>;

export default function FieldInputCssValueUnit<FormFields extends FieldValues>({
  name,
  label,
  control,
  onChange: propsOnChange,
  defaultValue,
  rules,
  hidden,
  ...rest
}: FieldInputCssValueUnitProps<FormFields>) {
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
          <CssValueUnitInput
            onBlur={onBlur}
            onChange={(newValue) => {
              if (propsOnChange) {
                propsOnChange(newValue);
              }
              onChange(newValue);
            }}
            inputRef={ref}
            label={label}
            value={value as CssValueUnit}
            helperText={error ? error.message : ""}
            error={!!error}
            {...rest}
          />
        )
      }
    />
  );
}
