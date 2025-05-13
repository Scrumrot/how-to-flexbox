import type { ValuesFlexContainer } from "./ValuesFlexContainer";
import type { ValuesFlexItem } from "./ValuesFlexItem";
import type { StagingFormValues } from "./StagingFormValues";
import type { OutputCodeValue } from "./OutputCodeValue";
import type { MetaValue } from "./ValuesMeta";
import { defaultValuesFlexContainer } from "./ValuesFlexContainer";
import { defaultValuesFlexItem } from "./ValuesFlexItem";
import { defaultStagingFormValues } from "./StagingFormValues";
import { defaultOutputCodeValue } from "./OutputCodeValue";
import { defaultMetaValue } from "./ValuesMeta";
import * as yup from "yup";
export interface FlexFormValues {
  containers: ValuesFlexContainer[];
  items: ValuesFlexItem[];
  staging: StagingFormValues;
  output: OutputCodeValue;
  meta: MetaValue;
}

export const defaultFlexFormValues: FlexFormValues = Object.freeze({
  containers: [{ ...defaultValuesFlexContainer }],
  items: [{ ...defaultValuesFlexItem }],
  staging: { ...defaultStagingFormValues },
  output: { ...defaultOutputCodeValue },
  meta: { ...defaultMetaValue }
});
// : SchemaOf<FlexFormValues>
const FlexFormValuesSchema = yup.object({
  containers: yup.string() //ValuesFlexContainerSchema,
  // items: ValuesFlexItemSchema,
  // staging: StagingFormValuesSchema,
  // output: OutputCodeValueSchema
});
