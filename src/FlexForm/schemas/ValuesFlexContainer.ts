import { alignSelf } from "@shared";
import { defaultValuesFlexItem } from "./ValuesFlexItem";
import type { ValuesFlexItem } from "./ValuesFlexItem";

export interface ValuesFlexContainer
  extends Omit<ValuesFlexItem, "containerId"> {
  containerId?: string;
  mainAxis: boolean;
  crossAxis: boolean;
}

export const defaultValuesFlexContainer: ValuesFlexContainer = Object.freeze({
  ...defaultValuesFlexItem,
  width: "100%",
  height: "auto",
  flexBasis: "auto",
  flexGrow: 0,
  flexShrink: 1,
  flex: "0 1 auto",
  alignSelf: alignSelf.stretch,
  containerId: undefined,
  mainAxis: false,
  crossAxis: false
});

// export const ValuesFlexContainerSchema: SchemaOf<ValuesFlexContainer> =  yup.object({
//   id: yup.string().required(),
//   containerId: yup.string(),
//   display: makeYupOneOf<typeof display>(display).required(),
//   width: yup.string().required(),
//   height: yup.string().required(),
//   flexBasis: yup.string().required(),
//   order: yup.number().required(),
//   flexGrow: yup.number().required(),
//   flexShrink: yup.number().required(),
//   alignSelf: makeYupOneOf<typeof alignSelf>(alignSelf).required(),
//   flex: yup.string().required(),
//   flexDirection:makeYupOneOf<typeof flexDirection>(flexDirection).required(),
//   flexWrap: makeYupOneOf<typeof flexWrap>(flexWrap).required(),
//   flexFlow: yup.string().required(),
//   justifyContent: makeYupOneOf<typeof justifyContent>(justifyContent).required(),
//   alignItems: makeYupOneOf<typeof alignItems>(alignItems).required(),
//   alignContent: makeYupOneOf<typeof alignItems>(alignItems).required(),
//   gap: yup.number().required()
// });
