import { ReactNode } from "react";
import { FlexFormValues } from "./types";
import useFlexForm from "./useFlexForm";
import { ProviderFlexFormContext } from "./FlexFormContext";
import { createFlexFormValues } from "./helpers";
interface FlexFormProps {
  children: ReactNode;
  defaultVaules?: Partial<FlexFormValues>;
}
export default function FlexForm({ children, defaultVaules }: FlexFormProps) {
  const methods = useFlexForm(createFlexFormValues());
  return (
    <ProviderFlexFormContext value={methods}>
      {children}
    </ProviderFlexFormContext>
  );
}
