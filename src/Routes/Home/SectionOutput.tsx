import Paper, { PaperProps } from "@mui/material/Paper";
import { Output } from "FlexForm";
export default function SectionOutput({
  sx,
  ...rest
}: Omit<PaperProps, "children">) {
  return (
    <Paper
      sx={{
        flex: "1 1 100%",
        p: 1,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxHeight: "100%",
        ...(sx || {})
      }}
      {...rest}
    >
      <Output />
    </Paper>
  );
}
