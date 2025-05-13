import LightModeIcon from "@mui/icons-material/LightMode";
import ToggleButton, { ToggleButtonProps } from "@mui/material/ToggleButton";
import { ThemeModeOptionsEnum } from "../Contexts";
export default function LightModeButton(
  props: Omit<ToggleButtonProps, "value">
) {
  return (
    <ToggleButton
      // color="secondary"
      aria-label="Color Mode Light"
      {...props}
      value={ThemeModeOptionsEnum.Light}
    >
      <LightModeIcon sx={{ mr: 1 }} /> Light
    </ToggleButton>
  );
}
