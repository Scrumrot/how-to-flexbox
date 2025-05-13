import * as yup from "yup";
import {
  display,
  CssUnits,
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
  Gap
} from "@shared";
type CssValueUnits =  `${number}${CssUnits}` | 'auto' | 'unset' | 0;
export interface ValuesFlexItem {
  id: string;
  containerId: string;
  display: Display;
  width?: CssValueUnits;
  height?: CssValueUnits;
  flexBasis: FlexBasis;
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
  gap: Gap;
}

export const defaultFlexItem: ValuesFlexItem = Object.freeze({
  id: "",
  containerId: "",
  display: display.flex,
  width: "100%",
  height: "100%",
  flexBasis: "auto",
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  alignSelf: "flex-start",
  flex: "0 1 auto",
  flexDirection: "row",
  flexWrap: "nowrap",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "normal",
  gap: 0
});

export interface ValuesFlexContainer
  extends Omit<ValuesFlexItem, "containerId"> {
  containerId?: string;
}

export const defaultValuesFlexContainer: ValuesFlexContainer = Object.freeze({
  ...defaultFlexItem,
  containerId: undefined,
});

export interface StagingFormValues {
  mainAxis: boolean;
  crossAxis: boolean;
  minWidth: CssValueUnits;
  maxWidth: CssValueUnits;
  minHeight: CssValueUnits;
  maxHeight: CssValueUnits;
  aspectRatio: string;
  padding: { top: CssValueUnits; right: CssValueUnits; bottom: CssValueUnits; left: CssValueUnits };
  borderWidth: {
    top: CssValueUnits;
    right: CssValueUnits;
    bottom: CssValueUnits;
    left: CssValueUnits;
  };
  margin: { top: CssValueUnits; right: CssValueUnits; bottom: CssValueUnits; left: CssValueUnits };
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

export interface OutputCodeValue {
  asCss: boolean;
}

export const defaultOutputCodeValue:OutputCodeValue = Object.freeze({
  asCss: true
});

export interface FlexFormValues {
  containers: ValuesFlexContainer[];
  items: ValuesFlexItem[];
  staging: StagingFormValues;
  output: OutputCodeValue;
}

export const defaultFlexFormValues:FlexFormValues = Object.freeze({
  containers: [{...defaultValuesFlexContainer}],
  items: [{...defaultFlexItem}],
  staging: {...defaultStagingFormValues},
  output: {...defaultOutputCodeValue}
});
