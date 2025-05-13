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

export interface FlexGrowFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flexGrow"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function FlexGrowField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexGrowFieldProps<Key>) {
  return (
    <FieldInputNumber<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flexGrow`}
      label="Flex Grow"
      hidden={hidden}
      description="ability for a flex item to grow if neccessary, dictating the amount of availble space inside the flex container the item should take up"
    />
  );
}
