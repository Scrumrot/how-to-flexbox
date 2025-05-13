import { useWatch } from "react-hook-form";
import { useFlexFormContext } from "../FlexFormContext";
import { AllFlexFormMethods } from "../useFlexForm";
import { FlexDirection } from "@shared";
import { groupBy } from "lodash";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Theme,
  SxProps,
  Fade,
  Tooltip,
  TooltipProps,
  tooltipClasses
} from "@mui/material";
const colors = ["info", "error", "warning", "success"] as const;

function getTooltipPlacement(
  isMain: boolean,
  direction: FlexDirection
): "left" | "right" | "top" | "bottom" {
  if (direction === "row-reverse") {
    return isMain ? "right" : "top";
  }
  if (direction === "column-reverse") {
    return isMain ? "bottom" : "left";
  }
  if (direction === "column") {
    return isMain ? "top" : "left";
  }
  return isMain ? "left" : "top";
}

function getAxisSize(
  axis: "main" | "cross",
  direction: FlexDirection
): SxProps<Theme> {
  const length = (theme: Theme) => `calc(100% + ${theme.spacing(2)})`;
  const thickness = (theme: Theme) => `${theme.spacing(0.5)}`;
  const isVertical = direction === "column" || direction === "column-reverse";
  if (axis === "main") {
    return {
      height: isVertical ? length : thickness,
      width: isVertical ? thickness : length
    };
  }
  return {
    height: isVertical ? thickness : length,
    width: isVertical ? length : thickness
  };
}
function getAxisColor(
  axis: "main" | "cross",
  direction: FlexDirection
): SxProps<Theme> {
  if (axis === "main") {
    return {
      backgroundColor: (theme) => `${theme.palette.primary.dark}`,
      // boxShadow: (theme) =>
      //   `0 0 2px 0 ${theme.palette.primary.dark}, ${theme.shadows[2]}`,
      opacity: 0.6
    };
  }
  return {
    backgroundColor: (theme) => `${theme.palette.secondary.dark}`,
    opacity: 0.6
  };
}
const MainAxisTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#fff",
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[1],
    fontSize: 11
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.dark
  }
}));
const CrossAxisTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: theme.shadows[1],
    fontSize: 11
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.dark
  }
}));
interface AxisGuideProps {
  axis: "main" | "cross";
  direction: FlexDirection;
  show: boolean;
}
function AxisGuide(props: AxisGuideProps) {
  const { axis, direction, show } = props;
  const isMain = axis === "main";
  const title = `${isMain ? "Main" : "Cross"}`;

  const placement = getTooltipPlacement(isMain, direction);
  const axisLine = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        ...getAxisColor(axis, direction)
      }}
    />
  );
  return (
    <>
      <Fade in={show}>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            transformOrigin: "center",
            zIndex: (theme) => theme.zIndex.appBar,
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            ...getAxisSize(axis, direction),
            overflow: "visible"
          }}
        >
          {isMain ? (
            <MainAxisTooltip
              title={title}
              placement={placement}
              arrow
              open={show}
            >
              {axisLine}
            </MainAxisTooltip>
          ) : (
            <CrossAxisTooltip
              title={title}
              placement={placement}
              arrow
              open={show}
            >
              {axisLine}
            </CrossAxisTooltip>
          )}
        </Box>
      </Fade>
    </>
  );
}

export default function Stage() {
  const { control, setValue } = useFlexFormContext() as AllFlexFormMethods;
  const activeContainerId = useWatch({
    control,
    name: "meta.active.containerId"
  });
  const activeItemId = useWatch({ control, name: "meta.active.itemId" });
  const containers = useWatch({ control, name: "containers" });
  const items = useWatch({ control, name: "items" });

  const itemsMap = groupBy(items, ({ containerId }) => containerId);
  return (
    <Box
      sx={{
        width: "100%",
        p: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        flex: "1 1 100%",
        gap: 2
      }}
    >
      {containers.map(
        ({ id, containerId, flexFlow, flex, crossAxis, mainAxis, ...rest }) => {
          const items = itemsMap[id] || [];
          return (
            <Paper
              square
              key={`${id}-${containerId}`}
              sx={{
                p: 2,
                position: "relative",
                boxShadow:
                  activeContainerId === id
                    ? (theme) =>
                        `0 0 1px 1px ${theme.palette.secondary.dark} inset, 0 0 1px 0 ${theme.palette.secondary.light}`
                    : `0 0 0px 2px rbga(0,0,0,0) inset, 0 0 0px 0 rbga(0,0,0,0)`,
                ...rest
              }}
              onClick={() => setValue(`meta.active.containerId`, id)}
              elevation={0}
            >
              <AxisGuide
                axis="main"
                direction={rest.flexDirection}
                show={mainAxis}
              />
              <AxisGuide
                axis="cross"
                direction={rest.flexDirection}
                show={crossAxis}
              />
              {items.map(({ id, containerId, ...rest }, i) => {
                return (
                  <Box
                    key={`${id}-${containerId}`}
                    sx={{
                      background: (theme) =>
                        theme.palette[colors[i % colors.length]].dark,
                      p: 2,
                      boxShadow:
                        activeItemId === id
                          ? (theme) =>
                              `0 0 0px 1px ${theme.palette.info.light} inset, 0 0 2px 0 ${theme.palette.info.dark}`
                          : `0 0 0px 2px rbga(0,0,0,0) inset, 0 0 2px 0 rbga(0,0,0,0)`,
                      position: "relative",
                      transition:
                        "flex 150ms ease-in-out, box-shadow 200ms ease-in",
                      ...rest
                    }}
                    onClick={() => setValue(`meta.active.itemId`, id)}
                  >
                    <Typography sx={{ textAlign: "center", width: "100%" }}>
                      Item {i + 1}
                    </Typography>
                  </Box>
                );
              })}
            </Paper>
          );
        }
      )}
    </Box>
  );
}
