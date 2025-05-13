import { MouseEvent, useEffect, ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useBoolean } from "@fluentui/react-hooks";
export interface SecretInputProps extends FormControlProps {
  onChange: (value: unknown) => void;
  onBlur: () => void;
  value: string;
  inputRef: React.Ref<typeof Input>;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  description?: ReactNode;
}
export default function SecretInput({
  onChange,
  value,
  inputRef,
  onBlur,
  label
}: SecretInputProps) {
  const [showPassword, { toggle: toggleShow }] = useBoolean(true);

  useEffect(() => {
    return () => {
      toggleShow();
    };
  });

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
      <InputLabel htmlFor="standard-adornment-password">
        {label || "Secret Access Key"}
      </InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        size="small"
        sx={{ width: "100%" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShow}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
