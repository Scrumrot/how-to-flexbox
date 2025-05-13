import { FieldInputSelect, makeOptions, alignSelf } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface AlignSelfFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["alignSelf"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
const alignSelfOptions = makeOptions(Object.values<string>(alignSelf));
export default function AlignSelfField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: AlignSelfFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.alignSelf`}
      options={alignSelfOptions}
      label="Align Self"
      hidden={hidden}
      description="it makes possible to override the align-items value for specific flex items"
    />
  );
}
