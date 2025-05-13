import CloseIcon from "@mui/icons-material/Close";
import { useContextThemeMode } from "../Contexts";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
export default function CloseSettingsButton(
  props: Omit<IconButtonProps, "onClick">
) {
  const { modeDispatch, ThemeModeOptionsEnum } = useContextThemeMode();

  return (
    <IconButton
      color="inherit"
      aria-label="Close Settings"
      size="small"
      {...props}
      onClick={() => {
        modeDispatch({ type: ThemeModeOptionsEnum.Close });
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}
