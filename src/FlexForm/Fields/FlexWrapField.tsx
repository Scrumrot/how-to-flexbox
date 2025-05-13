import { FieldInputSelect, makeOptions, flexWrap } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface FlexWrapFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flexWrap"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
const flexWrapOptions = makeOptions(Object.values<string>(flexWrap));
export default function FlexWrapField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexWrapFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flexWrap`}
      options={flexWrapOptions}
      label="Flex Wrap"
      hidden={hidden}
      description="defines whether flex items are forced in single line or can be flowed into multiple lines"
    />
  );
}
