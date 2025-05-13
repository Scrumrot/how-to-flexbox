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

export interface GapFieldProps<Key extends "items" | "containers" = "items"> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["gap"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
export default function gapField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: GapFieldProps<Key>) {
  return (
    <FieldInputCssValueUnit<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.gap`}
      label="Gap"
      hidden={hidden}
      description="space between child elements"
    />
  );
}
