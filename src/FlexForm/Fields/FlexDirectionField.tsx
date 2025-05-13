import { FieldInputSelect, flexDirection, makeOptions } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";
const flexDirectionOptions = makeOptions(Object.values<string>(flexDirection));
type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface FlexDirectionFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flexDirection"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function FlexDirectionField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexDirectionFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flexDirection`}
      label="Flex Direction"
      options={flexDirectionOptions}
      hidden={hidden}
      description="establishes the main-axis, defining the direction flex items are placed in the flex container"
    />
  );
}
