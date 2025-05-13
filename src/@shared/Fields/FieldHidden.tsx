import { Controller, FieldValues } from "react-hook-form";
import { BaseFieldTypes } from "./types";

export default function FieldHidden<FormFields extends FieldValues>({
  name,
  control,
  defaultValue,
  rules
}: BaseFieldTypes<FormFields>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={() => <></>}
    />
  );
}
