import { ReactNode } from "react";
import { useId } from "@fluentui/react-hooks";
import Select, { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
export type SelectOption = { label: string; key: string };

export interface MultiSelectInputProps
  extends Omit<SelectProps, "onChange" | "multiple"> {
  onChange: (value?: string[]) => void;
  value: string[];
  inputRef?: React.Ref<typeof Select>;
  label?: ReactNode;
  options: SelectOption[];
  defaultValue?: string[];
  description?: ReactNode;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function MultiSelectInput({
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
  defaultValue,
  ...rest
}: MultiSelectInputProps) {
  const labelId = useId("multiple-chip-label");
  return (
    <FormControl sx={{ m: 1, width: "100%", ...(sx || {}) }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        {...rest}
        defaultValue={defaultValue}
        labelId={labelId}
        id={id}
        style={style}
        className={className}
        sx={{ width: "100%" }}
        value={value || ""}
        onChange={(event) => {
          const {
            target: { value }
          } = event;
          const val = !value ? [] : Array.isArray(value) ? value : [value];
          onChange(val);
        }}
        input={<OutlinedInput label={label} />}
        disabled={!options.length || disabled}
        inputRef={inputRef}
        label={label}
        variant="standard"
        multiple
        renderValue={(selected: string[]) => {
          const selectedValues = (selected || []).reduce<SelectOption[]>(
            (all, val) => {
              const targetOption: SelectOption | undefined = (
                options || [{ key: "NONE", label: "No Options" }]
              ).find((option) => val === option.key);
              if (targetOption) {
                return [...all, targetOption];
              }
              return all;
            },
            []
          );

          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selectedValues.map(({ label, key }) => (
                <Chip
                  key={key}
                  label={label}
                  clickable
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  onDelete={() => {
                    onChange((value || []).filter((id) => id !== key));
                  }}
                />
              ))}
            </Box>
          );
        }}
        MenuProps={MenuProps}
      >
        {(options || [{ key: "NONE", label: "No Options" }]).map((option) => (
          <MenuItem value={option.key} key={option.key}>
            <Checkbox checked={value.indexOf(option.key) > -1} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
