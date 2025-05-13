import { useContextThemeMode } from "../Contexts";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CloseSettingsButton from "./CloseSettingsButton";
import ModeButtonGroup from "./ModeButtonGroup";
export default function SettingsDrawer() {
  const {
    modeState: { open },
    modeDispatch,
    ThemeModeOptionsEnum
  } = useContextThemeMode();
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        modeDispatch({ type: ThemeModeOptionsEnum.Close });
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxWidth: "100vw"
      }}
    >
      <Paper sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            display: "flex"
          }}
        >
          <Typography variant="h6" component="h6">
            Settings
          </Typography>
          <CloseSettingsButton />
        </Box>
        <Divider />
        <Box
          sx={{
            justifyContent: "stretch",
            alignItems: "center",
            px: 2
          }}
        >
          <Typography variant="body1" component="p" sx={{ mt: 2, mb: 2 }}>
            Mode
          </Typography>
          <ModeButtonGroup />
        </Box>
      </Paper>
    </Drawer>
  );
}
