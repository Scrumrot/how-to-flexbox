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

export interface FlexShrinkFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flexShrink"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function FlexShrinkField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexShrinkFieldProps<Key>) {
  return (
    <FieldInputNumber<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flexShrink`}
      label="Flex Shrink"
      hidden={hidden}
      description="determines how much the flex item will shrink relative to the rest of the flex itmes in flex container when there is not enough space on the row"
    />
  );
}
