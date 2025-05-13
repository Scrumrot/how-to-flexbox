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

export interface WidthFieldProps<Key extends "items" | "containers" = "items"> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["width"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
export default function widthField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: WidthFieldProps<Key>) {
  return (
    <FieldInputCssValueUnit<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.width`}
      label="Width"
      hidden={hidden}
      description="width of the view area"
    />
  );
}
