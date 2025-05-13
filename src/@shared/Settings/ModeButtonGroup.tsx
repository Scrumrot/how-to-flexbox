import ToggleButtonGroup, {
  ToggleButtonGroupProps
} from "@mui/material/ToggleButtonGroup";
import { ThemeModeOptionsEnum, useContextThemeMode } from "../Contexts";
import SystemModeButton from "./SystemModeButton";
import LightModeButton from "./LightModeButton";
import DarkModeButton from "./DarkModeButton";
export default function ModeButtonGroup(
  props: Omit<ToggleButtonGroupProps, "handleChange">
) {
  const {
    modeState: { mode },
    modeDispatch
  } = useContextThemeMode();
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextMode:
      | ThemeModeOptionsEnum.Dark
      | ThemeModeOptionsEnum.Light
      | ThemeModeOptionsEnum.System
      | null
  ) => {
    if (nextMode) {
      modeDispatch({ type: nextMode });
    }
  };

  return (
    <ToggleButtonGroup
      {...props}
      onChange={handleChange}
      value={mode}
      exclusive
      sx={{ width: "100%" }}
    >
      <LightModeButton selected={mode === ThemeModeOptionsEnum.Light} />
      <SystemModeButton selected={mode === ThemeModeOptionsEnum.System} />
      <DarkModeButton selected={mode === ThemeModeOptionsEnum.Dark} />
    </ToggleButtonGroup>
  );
}
