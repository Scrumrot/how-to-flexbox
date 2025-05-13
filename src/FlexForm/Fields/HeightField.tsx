import { FieldInputCssValueUnit } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface HeightFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["width"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
export default function heightField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: HeightFieldProps<Key>) {
  return (
    <FieldInputCssValueUnit<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.height`}
      label="Height"
      hidden={hidden}
      description="height of the view area"
    />
  );
}
