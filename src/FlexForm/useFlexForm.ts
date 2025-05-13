import {
  useForm,
  Control,
  UseFormWatch,
  UseFormSetValue,
  UseFormGetValues,
  UseFieldArrayReturn,
  ControllerProps,
  FieldPath,
  UseFormReturn,
  useFieldArray,
} from 'react-hook-form';
import {defaultFlexFormValues, FlexFormValues} from './schemas';
import {useMemo, useContext, createContext} from 'react';

export type FlexFieldPath = FieldPath<FlexFormValues>;
export type FlexControllerPropsType = ControllerProps<FlexFormValues>;
export type FlexControlType = Control<FlexFormValues>;
export type FlexWatchType = UseFormWatch<FlexFormValues>;
export type FlexSetValueType = UseFormSetValue<FlexFormValues>;
export type FlexGetValuesType = UseFormGetValues<FlexFormValues>;
export type UseFlexFormReset = UseFormReturn<FlexFormValues>['reset'];
export type UseFlexFormMethods = UseFormReturn<FlexFormValues>;
export type ContainersKeyType = `containers.${number}`;
export type ItemsKeyType = `items.${number}`;

export type UseContainersFieldArrayMethods = UseFieldArrayReturn<
FlexFormValues,
  'containers',
  'fakeKey'
>;
export type UseItemsFieldArrayMethods = UseFieldArrayReturn<
FlexFormValues,
  'items',
  'fakeKey'
>;

export default function useFlexForm(defaultVaules?: Partial<FlexFormValues>) {
  const initialValues = useMemo<FlexFormValues>(() => ({ ...defaultFlexFormValues, ...(defaultVaules || {}) }), [defaultVaules]);
  const formMethods = useForm<FlexFormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const items = useFieldArray({
    control: formMethods.control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'items',
    keyName: 'fakeKey',
  });
  const containers = useFieldArray({
    control: formMethods.control,
    name: 'containers',
    keyName: 'fakeKey',
  });

  return {...formMethods, items, containers, defaultValues:initialValues}
}

export type AllFlexFormMethods = ReturnType<typeof useFlexForm> & {defaultValues: FlexFormValues};



const FlexFormContext = createContext<AllFlexFormMethods | null>(null);
FlexFormContext.displayName = "FlexFormContext";
export function useFieldArrayFormContext(): AllFlexFormMethods {
  return useContext(FlexFormContext) as AllFlexFormMethods;
};
export const ProviderFlexFormContext = FlexFormContext.Provider;
export const useFlexFormContext = () => useContext(FlexFormContext);