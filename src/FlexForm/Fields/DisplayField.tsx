import { FieldInputSelect, makeOptions, display } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface DisplayFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["display"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
const displayOptions = makeOptions(Object.values<string>(display));
export default function DisplayField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: DisplayFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.display`}
      options={displayOptions}
      label="Display"
      hidden={hidden}
      description="enables flex context for all its direct children"
    />
  );
}
