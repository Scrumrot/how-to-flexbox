import { FieldHidden } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface FlexFieldProps<Key extends "items" | "containers" = "items"> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flex"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function FlexField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexFieldProps<Key>) {
  return (
    <FieldHidden<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flex`}
    />
  );
}
