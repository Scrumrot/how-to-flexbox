import {
  alignSelf,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  FlexBasis,
  Order,
  FlexGrow,
  FlexShrink,
  AlignSelf,
  Flex,
  Display,
  FlexDirection,
  FlexWrap,
  FlexFlow,
  JustifyContent,
  AlignItems,
  AlignContent,
  Gap,
  CssValueUnit
} from "@shared";
import * as yup from "yup";
/**
 * This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
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

export interface ValuesFlexItem {
  id: string;
  containerId: string;
  display: Display;
  width?: CssValueUnit;
  height?: CssValueUnit;
  flexBasis?: FlexBasis;
  order: Order;
  flexGrow: FlexGrow;
  flexShrink: FlexShrink;
  alignSelf: AlignSelf;
  flex: Flex;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  flexFlow: FlexFlow;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  gap?: Gap;
}

export const defaultValuesFlexItem: ValuesFlexItem = Object.freeze({
  id: "0",
  containerId: "0",
  display: display["flex"],
  width: "auto",
  height: "auto",
  flexBasis: "auto",
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  alignSelf: alignSelf["auto"],
  flex: "0 1 auto",
  flexDirection: flexDirection["row"],
  flexWrap: flexWrap["nowrap"],
  flexFlow: `${flexDirection["row"]} ${flexWrap["nowrap"]}`,
  justifyContent: justifyContent["flex-start"],
  alignItems: alignItems["stretch"],
  alignContent: alignContent["normal"],
  gap: "0px"
});

export const ValuesFlexItemSchema: SchemaOf<ValuesFlexItem> = yup.object({
  id: yup.string().required(),
  containerId: yup.string().required(),
  // display: makeYupOneOf<typeof display>(display).required(),
  width: yup.string().required(),
  height: yup.string().required(),
  flexBasis: yup.string().required(),
  order: yup.number().required(),
  flexGrow: yup.number().required(),
  flexShrink: yup.number().required(),
  // alignSelf: makeYupOneOf<typeof alignSelf>(alignSelf).required(),
  flex: yup.string().required(),
  // flexDirection:makeYupOneOf<typeof flexDirection>(flexDirection).required(),
  // flexWrap: makeYupOneOf<typeof flexWrap>(flexWrap).required(),
  flexFlow: yup.string().required(),
  // justifyContent: makeYupOneOf<typeof justifyContent>(justifyContent).required(),
  // alignItems: makeYupOneOf<typeof alignItems>(alignItems).required(),
  // alignContent: makeYupOneOf<typeof alignItems>(alignItems).required(),
  gap: yup.number().required()
});
