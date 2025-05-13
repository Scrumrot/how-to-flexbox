import { FlexFormValues } from "../types";
import {
  FieldInputSelect,
  FieldInputCssValueUnit,
  FieldInputText,
  FieldHidden,
  alignContent as _alignContent,
  alignItems as _alignItems,
  display as _display,
  flexDirection as _flexDirection,
  flexWrap as _flexWrap,
  justifyContent as _justifyContent,
  makeOptions
} from "@shared";
import { useFlexFormContext, AllFlexFormMethods } from "FlexForm";
import type { ContainersKeyType } from "../useFlexForm";
import Grid from "@mui/material/Grid";
import { useWatch } from "react-hook-form";

export default function SyncShorthandFields() {
  const { setValue, getValue, control } = useFlexFormContext();
  const containers = useWatch({ control, name: "containers" });
  const items = useWatch({ control, name: "items" });
}
