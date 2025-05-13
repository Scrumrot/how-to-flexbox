import { ReactNode } from "react";
import TextField, {
  BaseTextFieldProps,
  StandardTextFieldProps
} from "@mui/material/TextField";
import InfoTitle from "./InfoTitle";
export interface TextInputProps extends BaseTextFieldProps {
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
  inputRef: React.Ref<typeof TextField>;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  InputProps?: StandardTextFieldProps["InputProps"];
  description?: ReactNode;
}
export default function TextInput({
  sx,
  variant,
  onChange,
  description,
  label,
  ...rest
}: TextInputProps) {
  return (
    <TextField
      variant={variant || "outlined"}
      size="small"
      onChange={(event) => {
        onChange(event.target.value || "");
      }}
      label={
        description ? (
          <InfoTitle label={label} description={description} />
        ) : (
          label
        )
      }
      {...rest}
      sx={{ width: "100%", ...(sx || {}) }}
    />
  );
}
