import Box, { BoxProps } from "@mui/material/Box";
export type RootProps = BoxProps;
const defaultStyle: BoxProps["sx"] = Object.freeze({
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
  alignItems: "stretch",
  flexWrap: "nowrap",
  overflow: "hidden",
  position: "relative",
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  flex: "1 0 100%"
});

export default function Root({ children, sx, className, ...rest }: RootProps) {
  return (
    <Box
      {...rest}
      className={`page-root${className ? ` ${className}` : ""}`}
      sx={sx ? { ...defaultStyle, ...sx } : defaultStyle}
    >
      {children}
    </Box>
  );
}
