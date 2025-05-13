import { ReactNode } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InfoTitle from "./InfoTitle";

export interface SelectInputProps extends Omit<TextFieldProps, "onChange"> {
  onChange: (value?: string | string[]) => void;
  value: string | string[];
  inputRef?: React.Ref<typeof TextField>;
  label?: React.ReactNode;
  options: { label: string; key: string }[];
  multiple?: boolean;
  description?: ReactNode;
}

export default function SelectInput({
  onChange,
  value,
  inputRef,
  label,
  options,
  sx,
  disabled,
  id,
  style,
  className,
  multiple,
  description,
  ...rest
}: SelectInputProps) {
  return (
    <TextField
      {...rest}
      select
      id={id}
      style={style}
      className={className}
      sx={{ width: "100%", ...(sx || {}) }}
      label={
        description ? (
          <InfoTitle label={label} description={description} />
        ) : (
          label
        )
      }
      value={value || ""}
      onChange={(event) => {
        const {
          target: { value }
        } = event;
        onChange((value as string | string[] | undefined) || "");
      }}
      disabled={!options.length || disabled}
      inputRef={inputRef}
      variant="outlined"
      size="small"
      // helperText="i'm mr meeseeks look at me!"
      SelectProps={{
        // native: true,
        multiple
      }}
    >
      {(options || [{ key: "NONE", label: "No Options" }]).map((option) => (
        <MenuItem value={option.key} key={option.key}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
