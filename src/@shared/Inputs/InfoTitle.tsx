import { ReactNode } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Box, SvgIconProps } from "@mui/material";

import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

export interface InfoTitleProps {
  description?: ReactNode;
  label?: ReactNode;
  tooltipProps?: Omit<TooltipProps, "title">;
  iconProps?: SvgIconProps;
}
export default function InfoTitle({
  description,
  label,
  tooltipProps,
  iconProps
}: InfoTitleProps) {
  const { placement = "top", arrow = true, ...tooltipRest } =
    tooltipProps || {};
  const { color = "info", fontSize = "small", sx: iconSX, ...iconRest } =
    iconProps || {};
  return (
    <Box sx={{ display: "flex", gap: 1 }} component="span">
      {label && label}
      {description && (
        <Tooltip
          title={description}
          arrow={arrow}
          placement={placement}
          {...(tooltipRest || {})}
        >
          <InfoIcon
            color={color}
            fontSize={fontSize}
            sx={{ ...(iconSX || {}), ml: 0 }}
            {...(iconRest || {})}
          />
        </Tooltip>
      )}
    </Box>
  );
}
