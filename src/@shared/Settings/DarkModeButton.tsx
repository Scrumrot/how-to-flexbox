import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton, { ToggleButtonProps } from "@mui/material/ToggleButton";
import { ThemeModeOptionsEnum } from "../Contexts";
export default function DarkModeButton(
  props: Omit<ToggleButtonProps, "value">
) {
  return (
    <ToggleButton
      color="secondary"
      aria-label="Color Mode Dark"
      {...props}
      value={ThemeModeOptionsEnum.Dark}
    >
      <DarkModeIcon sx={{ mr: 1 }} /> Dark
    </ToggleButton>
  );
}
