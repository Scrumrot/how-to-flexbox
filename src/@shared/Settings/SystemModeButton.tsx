import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import ToggleButton, { ToggleButtonProps } from "@mui/material/ToggleButton";
import { ThemeModeOptionsEnum } from "../Contexts";
export default function SystemModeButton(
  props: Omit<ToggleButtonProps, "value">
) {
  return (
    <ToggleButton
      color="secondary"
      aria-label="Color Mode System"
      {...props}
      value={ThemeModeOptionsEnum.System}
    >
      <SettingsBrightnessIcon sx={{ mr: 1 }} /> System
    </ToggleButton>
  );
}
