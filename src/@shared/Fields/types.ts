import {
  FieldPath,
  Control,
  ControllerProps,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
  UseFormTrigger,
  UseFormSetFocus,
  UseFormClearErrors,
  UseFormSetError,
  UseFormResetField,
  UseFormReset,
  UseFormHandleSubmit,
  FieldValues,
  UseFormReturn,
  UnpackNestedValue,
  PathValue,
  Path
} from "react-hook-form";

export type ControlType<FormFields extends FieldValues = FieldValues> = Control<
  FormFields
>;
export type FieldPathType<
  FormFields extends FieldValues = FieldValues
> = FieldPath<FormFields>;
export type ControllerPropsType<
  FormFields extends FieldValues = FieldValues
> = ControllerProps<FormFields>;
export type WatchType<
  FormFields extends FieldValues = FieldValues
> = UseFormWatch<FormFields>;
export type SetValueType<
  FormFields extends FieldValues = FieldValues
> = UseFormSetValue<FormFields>;
export type GetValuesType<
  FormFields extends FieldValues = FieldValues
> = UseFormGetValues<FormFields>;
export type TriggerType<
  FormFields extends FieldValues = FieldValues
> = UseFormTrigger<FormFields>;
export type SetFocusType<
  FormFields extends FieldValues = FieldValues
> = UseFormSetFocus<FormFields>;
export type ClearErrorsType<
  FormFields extends FieldValues = FieldValues
> = UseFormClearErrors<FormFields>;
export type SetErrorType<
  FormFields extends FieldValues = FieldValues
> = UseFormSetError<FormFields>;
export type ResetFieldType<
  FormFields extends FieldValues = FieldValues
> = UseFormResetField<FormFields>;
export type ResetType<
  FormFields extends FieldValues = FieldValues
> = UseFormReset<FormFields>;
export type HandleSubmitType<
  FormFields extends FieldValues = FieldValues
> = UseFormHandleSubmit<FormFields>;

// export type GetFormType<Key extends keyof UseFormReturn> =
//   Key extends UseFormReturn<infer T>[Key] ? UseFormReturn<infer T>[Key] : never;

export interface BaseFormTypes<T extends FieldValues> extends UseFormReturn<T> {
  control: ControlType<T>;
  fieldPath: FieldPathType<T>;
}
export interface BaseFieldTypes<FormFields extends FieldValues> {
  name: FieldPath<FormFields>;
  control: Control<FormFields>;
  defaultValue?: UnpackNestedValue<PathValue<FormFields, Path<FormFields>>>;
  rules?: ControllerProps["rules"];
}
