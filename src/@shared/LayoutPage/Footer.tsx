import Box, { BoxProps } from "@mui/material/Box";

export interface FooterProps extends BoxProps {
  className?: string;
  hideDiscord?: boolean;
}

export default function Footer({
  children,
  sx,
  className,
  hideDiscord,
  ...rest
}: FooterProps) {
  return (
    <Box
      {...rest}
      className={`page-footer${className ? ` ${className}` : ""}`}
      sx={{
        width: "100%",
        flex: "0 0 auto",
        padding: 0,
        margin: 0,
        minWidth: "1px",
        minHeight: "25px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        flexDirection: "column",
        ...(sx || {})
      }}
      component="footer"
    >
      {children}
    </Box>
  );
}
