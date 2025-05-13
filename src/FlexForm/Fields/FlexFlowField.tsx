import { FieldInputText } from "@shared";
import {
  FlexControlType,
  ContainersKeyType,
  FlexFormValues,
  ItemsKeyType
} from "../";

type PrefixType<Key extends "items" | "containers"> = Key extends "items"
  ? ItemsKeyType
  : ContainersKeyType;

export interface FlexFlowFieldProps<
  Key extends "items" | "containers" = "items"
> {
  control: FlexControlType;
  defaultValue: FlexFormValues[Key][0]["flexFlow"];
  prefix: PrefixType<Key>;
  hidden?: boolean;
}

export default function FlexFlowField<Key extends "items" | "containers">({
  defaultValue,
  control,
  prefix,
  hidden
}: FlexFlowFieldProps<Key>) {
  return (
    <FieldInputText<FlexFormValues>
      control={control}
      defaultValue={defaultValue}
      name={`${prefix}.flexFlow`}
      label="Flex Flow"
      hidden={hidden}
      description="shorthand for flex-direction and flex-wrap"
    />
  );
}
