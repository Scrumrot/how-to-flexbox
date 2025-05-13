import { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SettingsButton from "../Settings/SettingsButton";

export default function Header({
  title,
  children
}: {
  children?: ReactNode;
  title?: string;
  logo?: string;
}) {
  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        sx={{ display: "flex", flex: "1 1 auto", px: 2, minHeight: 13 }}
      >
        <Box
          sx={{
            alignItems: "center",
            p: 0,
            display: "flex",
            flex: "1 1 auto"
          }}
        >
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{ flex: "0 1 auto" }}
          >
            {title}
          </Typography>
        </Box>
        {children && (
          <Box
            sx={{
              alignItems: "center",
              p: 0,
              display: "flex",
              flex: "1 1 auto"
            }}
          >
            {children}
          </Box>
        )}
        <SettingsButton />
      </Toolbar>
    </AppBar>
  );
}
