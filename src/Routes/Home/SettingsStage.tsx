import Grid from "@mui/material/Grid";
import Paper, { PaperProps } from "@mui/material/Paper";
import { StageSettings } from "FlexForm";
export default function SettingsStage({
  sx,
  ...rest
}: Omit<PaperProps, "children">) {
  return (
    <Paper sx={{ flex: "1 1 100%", p: 1, ...(sx || {}) }} {...rest}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="stretch"
        justifyContent="stretch"
      >
        <Grid item sm={12} alignItems="center" justifyContent="center">
          <StageSettings />
        </Grid>
      </Grid>
    </Paper>
  );
}
