import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useContextThemeMode } from "../Contexts";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
export default function SettingsButton(
  props: Omit<IconButtonProps, "onClick">
) {
  const { modeDispatch, ThemeModeOptionsEnum } = useContextThemeMode();

  return (
    <IconButton
      size="small"
      color="inherit"
      edge="end"
      aria-label="Open Settings"
      {...props}
      onClick={() => {
        modeDispatch({ type: ThemeModeOptionsEnum.Open });
      }}
    >
      <SettingsOutlinedIcon />
    </IconButton>
  );
}
