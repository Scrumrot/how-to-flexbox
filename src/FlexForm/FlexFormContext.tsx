import { createContext, useContext } from "react";
import { AllFlexFormMethods } from "./useFlexForm";

const FlexFormContext = createContext<AllFlexFormMethods | null>(null);
FlexFormContext.displayName = "FlexFormContext";
export const ProviderFlexFormContext = FlexFormContext.Provider;
export const useFlexFormContext = () => useContext(FlexFormContext);
