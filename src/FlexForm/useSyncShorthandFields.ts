import { FlexControlType, FlexSetValueType } from "./";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";

export interface UseSyncShorthandFieldsInput {
  name: "items" | "containers";
  index: number;
  control: FlexControlType;
  setValue: FlexSetValueType;
}
export default function useSyncShorthandFields({
  name,
  index,
  control,
  setValue
}: UseSyncShorthandFieldsInput) {
  const prefix = `${name}.${index}` as const;
  const {
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    flexDirection,
    flexFlow,
    flexWrap
  } = useWatch({ control, name: prefix });
  const derivedFlex = `${flexGrow} ${flexShrink} ${flexBasis}` as const;
  useEffect(() => {
    if (derivedFlex !== flex) {
      setValue(`${prefix}.flex`, derivedFlex);
    }
  }, [derivedFlex, flex, prefix, setValue]);

  const derivedFlexFlow = `${flexDirection} ${flexWrap}` as const;
  useEffect(() => {
    if (derivedFlexFlow !== flexFlow) {
      setValue(`${prefix}.flexFlow`, derivedFlexFlow);
    }
  }, [derivedFlexFlow, flexFlow, prefix, setValue]);
}
