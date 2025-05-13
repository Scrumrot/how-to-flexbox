import { useWatch } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import type { ValuesFlexContainer, ValuesFlexItem } from "../types";
import { useFlexFormContext } from "../FlexFormContext";
import { AllFlexFormMethods } from "../useFlexForm";
import { groupBy } from "lodash";
import { IconButton, Box, Tooltip } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import JSONView from "./JSONView";

interface ValueMap {
  container: ValuesFlexContainer;
  items: ValuesFlexItem[];
}
export default function Output() {
  const { control } = useFlexFormContext() as AllFlexFormMethods;
  const containers = useWatch({ control, name: "containers" });
  const items = useWatch({ control, name: "items" });

  const containersMap = groupBy(containers, ({ id }) => id);

  const itemsMap = groupBy(items, ({ containerId }) => containerId);
  const valuesMap = containers.reduce((all, container, i) => {
    const {
      id,
      mainAxis,
      crossAxis,
      containerId,
      ...restContainer
    } = container;
    const className = `.container-${i}`;
    const containerItems = (itemsMap[id] || []).reduce(
      (allItems, cur, itemIndex) => {
        const { id, containerId, id: itemId, ...itemRest } = cur;
        const itemClassName = `${className}-item-${itemIndex}`;
        return { ...allItems, [itemClassName]: itemRest };
      },
      {}
    );

    return { ...all, [className]: restContainer, ...containerItems };
  }, {});
  // const valuesMap = Object.entries(itemsMap).reduce<Record<string, ValueMap>>(
  //   (all, [containerId, value]) => {
  //     const containerTarget = containersMap[containerId];
  //     if (!containerTarget || !containerTarget[0]) {
  //       return all;
  //     }
  //     const container = containersMap[containerId][0];
  //     if (all && all[containerId]) {
  //       return {
  //         ...all,
  //         [containerId]: {
  //           container,
  //           items: [...all[containerId].items, ...value]
  //         }
  //       };
  //     }
  //     return { ...all, [containerId]: { container, items: [...value] } };
  //   },
  //   {}
  // );

  return (
    <>
      <Box>
        <Tooltip title="Copy">
          <IconButton aria-label="copy">
            <CopyToClipboard
              text={JSON.stringify(valuesMap, undefined, 1)}
              onCopy={() => alert("Copied")}
            >
              <CopyAllIcon />
            </CopyToClipboard>
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ flex: "1 1 auto", maxHeight: "200px" }}>
        <JSONView />
      </Box>
    </>
  );
}
