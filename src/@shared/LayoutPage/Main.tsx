import Box, { BoxProps } from "@mui/material/Box";
export type MainProps = BoxProps;

export default function Main({ children, sx, ...rest }: MainProps) {
  return (
    <Box
      sx={{
        width: "100%",
        flex: {
          xs: "1 1 auto",
          sm: "1 1 auto",
          md: "1 1 auto"
        },
        overflowY: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "auto"
        },
        // overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100vw",
        p: 2,
        ...(sx || {})
      }}
      component={"main"}
      {...rest}
    >
      {children}
    </Box>
  );
}
