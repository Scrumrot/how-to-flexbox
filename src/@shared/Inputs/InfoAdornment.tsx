import { ReactNode } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { SvgIconProps } from "@mui/material";
import InputAdornment, {
  InputAdornmentProps
} from "@mui/material/InputAdornment";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

export interface InfoAdornmentProps
  extends Omit<InputAdornmentProps, "title" | "position"> {
  title: ReactNode;
  tooltipProps?: Omit<TooltipProps, "title">;
  iconProps?: SvgIconProps;
  position?: InputAdornmentProps["position"];
}
export default function InfoAdornment({
  title,
  tooltipProps,
  iconProps,
  position = "start",
  ...rest
}: InfoAdornmentProps) {
  const { placement = "top", arrow = true, ...tooltipRest } =
    tooltipProps || {};
  const { color = "info", fontSize = "small", ...iconRest } = iconProps || {};
  return (
    <InputAdornment position={position} {...rest}>
      <Tooltip
        title={title}
        arrow={arrow}
        placement={placement}
        {...(tooltipRest || {})}
      >
        <InfoIcon color={color} fontSize={fontSize} {...(iconRest || {})} />
      </Tooltip>
    </InputAdornment>
  );
}
