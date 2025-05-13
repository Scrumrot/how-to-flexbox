import Paper, { PaperProps } from "@mui/material/Paper";
import { Stage } from "FlexForm";

export default function SectionStage({
  sx,
  ...rest
}: Omit<PaperProps, "children">) {
  return (
    <Paper
      sx={{
        flex: "1 1 75%",
        p: 1,
        background: (theme) => theme.palette.background.grid || "",
        display: "flex",
        backgroundSize:
          "10px 10px,10px 10px,100px 100px,100px 100px,100px 100px,100px 100px,100px 100px,100px 100px",
        flexDirection: "column",
        alignItems: "stretch",
        ...(sx || {})
      }}
      {...rest}
    >
      <Stage />
    </Paper>
  );
}
