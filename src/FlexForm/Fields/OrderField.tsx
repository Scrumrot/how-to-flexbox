import { FieldInputNumber } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface OrderFieldProps<Key extends "items" | "containers" = "items"> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["order"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function OrderField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: OrderFieldProps<Key>) {
  return (
    <FieldInputNumber<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.order`}
      label="Order"
      hidden={hidden}
      description="enumerate order position of child element"
    />
  );
}
