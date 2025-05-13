import { Controller, ControllerProps, FieldValues } from "react-hook-form";

export default function ControllerInputForm<Values extends FieldValues>({
  control,
  ...rest
}: ControllerProps<Values>) {
  return <Controller control={control} {...rest} />;
}
