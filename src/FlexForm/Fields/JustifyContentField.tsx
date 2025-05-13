import { FieldInputSelect, makeOptions, justifyContent } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface JustifyContentFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["justifyContent"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}
const justifyContentOptions = makeOptions(
  Object.values<string>(justifyContent)
);
export default function JustifyContentField<
  Key extends "items" | "containers"
>({ defaultValue, control, prefix, hidden }: JustifyContentFieldProps<Key>) {
  return (
    <FieldInputSelect<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.justifyContent`}
      options={justifyContentOptions}
      label="Justify Content"
      hidden={hidden}
      description="defines alignment along main axix, distributing extra free space leftover"
    />
  );
}
