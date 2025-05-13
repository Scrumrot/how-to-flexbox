import { FieldInputSelect, makeOptions, alignContent } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface AlignContentFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["alignContent"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
const alignContentOptions = makeOptions(Object.values<string>(alignContent));
export default function AlignContentField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: AlignContentFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.alignContent`}
      options={alignContentOptions}
      label="Align Content"
      hidden={hidden}
      description="aligns a flex container’s lines within when there is extra space in the cross-axis"
    />
  );
}
