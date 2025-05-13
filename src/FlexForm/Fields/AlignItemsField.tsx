import { FieldInputSelect, makeOptions, alignItems } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface AlignItemsFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["alignItems"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
const alignItemsOptions = makeOptions(Object.values<string>(alignItems));
export default function AlignItemsField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: AlignItemsFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.alignItems`}
      options={alignItemsOptions}
      label="Align Items"
      hidden={hidden}
      description="defines default behavior for how flex items are laid out along the cross axis on the current line"
    />
  );
}
