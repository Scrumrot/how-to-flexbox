import { ReactNode } from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NumberInput, { NumberInputProps } from "./NumberInput";
import Typography from "@mui/material/Typography";
export interface SliderInputProps extends Omit<SliderProps, "onChange"> {
  value: number;
  inputRef?: React.Ref<typeof TextField>;
  label?: React.ReactNode;
  onChange: (value?: number) => void;
  inputProps?: NumberInputProps;
  step?: number;
  min?: number;
  max?: number;
  helperText?: string;
  float?: number;
  labelOnTop?: boolean;
  error?: boolean;
  description?: ReactNode;
}
export default function SliderInput({
  label,
  value,
  inputRef,
  sx,
  onChange,
  inputProps,
  step,
  min,
  max,
  helperText,
  float,
  orientation,
  labelOnTop,
  error,
  ...rest
}: SliderInputProps) {
  const isVertical = orientation === "vertical";
  const margin = isVertical ? { mb: 3 } : { mr: 3 };
  const slider = (
    <Slider
      sx={{ ...margin, flex: "1 1 auto" }}
      {...rest}
      value={value || 0}
      onChange={(event, value) => {
        onChange(value ? parseFloat(`${value as number}`) : value);
      }}
      aria-labelledby="input-slider"
      step={step}
      min={min}
      max={max}
      orientation={orientation}
      valueLabelDisplay="auto"
    />
  );
  const numberInput = (
    <NumberInput
      {...inputProps}
      value={value}
      size="small"
      onChange={(value) => {
        onChange(value ? parseFloat(`${value}`) : value);
      }}
      variant="outlined"
      inputRef={inputRef}
      hiddenLabel
      error={error}
      helperText={helperText}
      float={float}
      step={step}
      min={min}
      max={max}
      inputProps={{
        "aria-labelledby": "input-slider",
        sx: { textAlign: "center" }
      }}
      InputProps={
        {
          // disableUnderline: true,
        }
      }
      sx={{ width: `auto`, textAlign: "center", flex: "0 0 25%" }}
    />
  );
  const inputLabel = (
    <Typography variant="body2" sx={margin}>
      {label}
    </Typography>
  );
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexWrap: labelOnTop ? "wrap" : "nowrap",
        ...(sx || {})
      }}
    >
      {labelOnTop ? (
        <>
          {inputLabel}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              flexWrap: "nowrap"
            }}
          >
            {slider}
            {numberInput}
          </Box>
        </>
      ) : (
        <>
          {" "}
          {inputLabel}
          {slider}
          {numberInput}{" "}
        </>
      )}
    </Box>
  );
}
