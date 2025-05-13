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
import { yupResolver } from '@hookform/resolvers/yup';
import {UserSchema, UserFormValues} from './SchemaUser';
import {useMemo} from 'react';

export type UserFieldPath = FieldPath<UserFormValues>;
export type UserControllerPropsType = ControllerProps<UserFormValues>;
export type UserControlType = Control<UserFormValues>;
export type UserWatchType = UseFormWatch<UserFormValues>;
export type UserSetValueType = UseFormSetValue<UserFormValues>;
export type UserGetValuesType = UseFormGetValues<UserFormValues>;
export type PetsFieldArrayReturnType = UseFieldArrayReturn<
  UserFormValues,
  'pets',
  'fakeKey'
>;
export type UserFormRest = UseFormReturn<UserFormValues>['reset'];
export type PetKeyType = `pets.${number}`;

export const defaultVaules: UserFormValues = Object.freeze({
    age: undefined,
    cell: {
      area: '',
      exchange: '',
      line: '',
    },
    email: '',
    home: {
      area: '',
      exchange: '',
      line: '',
    },
    name: {
      first: '',
      middle: '',
      last: '',
    },
    pets: []
})

export default function useUserForm(values?: Partial<UserFormValues>) {
  const initialValues = useMemo<UserFormValues>(() => ({ ...defaultVaules, ...(values || {}) }), [values]);
  const formMethods = useForm<UserFormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    resolver: yupResolver(UserSchema),
  });

  const pets = useFieldArray({
    control: formMethods.control,
    name: 'pets',
    keyName: 'fakeKey',
  });

  return {...formMethods, pets}
}