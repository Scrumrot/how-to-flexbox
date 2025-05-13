import { ReactNode } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export interface DirectoryInputProps {
  onChange: (value: unknown) => void;
  onBlur: () => void;
  value: string;
  inputRef: React.Ref<typeof TextField>;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  options: { label: string; key: string }[];
  description?: ReactNode;
}
export default function DirectoryInput({
  onChange,
  value,
  inputRef,
  onBlur,
  helperText,
  label,
  options
}: DirectoryInputProps) {
  return (
    <Autocomplete
      disablePortal
      id="region-input"
      options={options}
      sx={{ m: 1 }}
      inputValue={value}
      onChange={(_e, val) => onChange(val?.key)}
      onBlur={onBlur}
      disabled={!options.length}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || "Directory"}
          inputRef={inputRef}
          helperText={helperText}
          variant="outlined"
        />
      )}
    />
  );
}
