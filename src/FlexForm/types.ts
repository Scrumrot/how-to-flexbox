import type {
  ControlType,
  FieldPathType,
  ControllerPropsType,
  WatchType,
  SetValueType,
  GetValuesType,
  SetErrorType,
  SetFocusType,
  HandleSubmitType,
  BaseFieldTypes,
  BaseFormTypes
} from "@shared";
import {
  FlexFormValues,
  OutputCodeValue,
  StagingFormValues,
  ValuesFlexContainer,
  ValuesFlexItem
} from "./schemas";
export type FlexControlType = ControlType<FlexFormValues>;
export type FlexFieldPathType = FieldPathType<FlexFormValues>;
export type FlexControllerPropsType = ControllerPropsType<FlexFormValues>;
export type FlexWatchType = WatchType<FlexFormValues>;
export type FlexSetValueType = SetValueType<FlexFormValues>;
export type FlexGetValuesType = GetValuesType<FlexFormValues>;
export type FlexSetErrorType = SetErrorType<FlexFormValues>;
export type FlexSetFocusType = SetFocusType<FlexFormValues>;
export type FlexHandleSubmitType = HandleSubmitType<FlexFormValues>;
export type FlexBaseFieldTypes = BaseFieldTypes<FlexFormValues>;
export type FlexBaseFormType = BaseFormTypes<FlexFormValues>;
export type {
  FlexFormValues,
  OutputCodeValue,
  StagingFormValues,
  ValuesFlexContainer,
  ValuesFlexItem
};
