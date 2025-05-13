import * as yup from "yup";
import { SchemaOf } from "yup";

export interface IPet {
  name: string;
  age?: number;
  type?: string;
}
export interface IPhone {
  area: string;
  exchange: string;
  line: string;
}

export interface IName {
  first: string;
  middle?: string;
  last: string;
}

export interface UserFormValues {
  age?: number;
  cell?: IPhone;
  email?: string;
  home?: IPhone;
  name: IName;
  pets: IPet[];
}

export const phoneSchema: SchemaOf<IPhone> = yup.object({
  area: yup
    .string()
    .matches(/^[0-9]{3}/, "Must Be Exactly 3 Digits")
    .required(),
  exchange: yup
    .string()
    .matches(/^[0-9]{3}/, "Must Be Exactly 3 Digits")
    .required(),
  line: yup
    .string()
    .matches(/^[0-9]{4}/, "Must Be Exactly 4 Digits")
    .required()
});
export const nameSchema: SchemaOf<IName> = yup.object({
  first: yup.string().required(),
  middle: yup.string(),
  last: yup.string().required()
});
const petSchema: SchemaOf<IPet> = yup.object({
  name: yup.string().required(),
  age: yup.number(),
  type: yup.string()
});

export const UserSchema: SchemaOf<UserFormValues> = yup.object({
  age: yup.number().required(),
  cell: phoneSchema.optional(),
  email: yup.string().email().required(),
  home: phoneSchema.optional(),
  name: nameSchema,
  pets: yup.array().of(petSchema)
});
