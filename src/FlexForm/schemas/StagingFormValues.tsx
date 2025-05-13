import { CssValueUnit } from "@shared";
/**
 * Staging Section of the Flex Form
 *
 * @remarks
 * Float, clear and vertical-align have no effect on a flex item.
 *
 * @Source
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-self
 *
 * @Properties
 * @Parent
 */

export interface StagingFormValues {
  mainAxis: boolean;
  crossAxis: boolean;
  minWidth: CssValueUnit;
  maxWidth: CssValueUnit;
  minHeight: CssValueUnit;
  maxHeight: CssValueUnit;
  aspectRatio: string;
  padding: {
    top: CssValueUnit;
    right: CssValueUnit;
    bottom: CssValueUnit;
    left: CssValueUnit;
  };
  borderWidth: {
    top: CssValueUnit;
    right: CssValueUnit;
    bottom: CssValueUnit;
    left: CssValueUnit;
  };
  margin: {
    top: CssValueUnit;
    right: CssValueUnit;
    bottom: CssValueUnit;
    left: CssValueUnit;
  };
}
export const defaultStagingFormValues: StagingFormValues = Object.freeze({
  mainAxis: false,
  crossAxis: false,
  minWidth: "1px",
  maxWidth: "100%",
  minHeight: "1px",
  maxHeight: "100%",
  aspectRatio: "auto",
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
  borderWidth: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});

// export const ValuesFlexItemSchema: SchemaOf<ValuesFlexItem> =  yup.object({
//   id: yup.string().required(),
//   containerId: yup.string().required(),
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
