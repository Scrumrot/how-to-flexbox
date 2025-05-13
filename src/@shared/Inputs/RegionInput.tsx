import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export type RegionOptionsType =
  | "us-east-2"
  | "us-east-1"
  | "us-west-1"
  | "us-west-2"
  | "af-south-1"
  | "ap-east-1"
  | "ap-south-1"
  | "ap-northeast-3"
  | "ap-northeast-2"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ap-northeast-1"
  | "ca-central-1"
  | "eu-central-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-south-1"
  | "eu-west-3"
  | "eu-north-1"
  | "me-south-1"
  | "sa-east-1";

export const regionOptions = [
  { label: "us-east-2", key: "us-east-2" },
  { label: "us-east-1", key: "us-east-1" },
  { label: "us-west-1", key: "us-west-1" },
  { label: "us-west-2", key: "us-west-2" },
  { label: "af-south-1", key: "af-south-1" },
  { label: "ap-east-1", key: "ap-east-1" },
  { label: "ap-south-1", key: "ap-south-1" },
  { label: "ap-northeast-3", key: "ap-northeast-3" },
  { label: "ap-northeast-2", key: "ap-northeast-2" },
  { label: "ap-southeast-1", key: "ap-southeast-1" },
  { label: "ap-southeast-2", key: "ap-southeast-2" },
  { label: "ap-northeast-1", key: "ap-northeast-1" },
  { label: "ca-central-1", key: "ca-central-1" },
  { label: "eu-central-1", key: "eu-central-1" },
  { label: "eu-west-1", key: "eu-west-1" },
  { label: "eu-west-2", key: "eu-west-2" },
  { label: "eu-south-1", key: "eu-south-1" },
  { label: "eu-west-3", key: "eu-west-3" },
  { label: "eu-north-1", key: "eu-north-1" },
  { label: "me-south-1", key: "me-south-1" },
  { label: "sa-east-1", key: "sa-east-1" }
];
export interface RegionInputProps {
  onChange: (value: unknown) => void;
  onBlur: () => void;
  value?: string;
  inputRef: React.Ref<typeof TextField>;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  description?: string;
}
export default function RegionInput({
  onChange,
  value,
  inputRef,
  onBlur,
  helperText,
  label
}: RegionInputProps) {
  return (
    <Autocomplete
      disablePortal
      id="region-input"
      options={regionOptions}
      sx={{ m: 0, width: "100%" }}
      inputValue={value}
      onChange={(_e, val) => onChange(val?.key)}
      onBlur={onBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || "Region"}
          inputRef={inputRef}
          helperText={helperText}
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
        />
      )}
    />
  );
}
