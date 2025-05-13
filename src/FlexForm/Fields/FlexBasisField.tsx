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

export interface FlexBasisProps<Key extends "items" | "containers" = "items"> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flexBasis"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function FlexBasisField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexBasisProps<Key>) {
  return (
    <FieldInputCssValueUnit<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flexBasis`}
      label="Flex Basis"
      hidden={hidden}
      description="specifies the inital size of the flex item, before any available space is distributed according to the flex factors"
    />
  );
}
