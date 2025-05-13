import ReactJson from "react-json-view";
import { useWatch } from "react-hook-form";
import { useFlexFormContext } from "../FlexFormContext";
import { AllFlexFormMethods } from "../useFlexForm";
import { groupBy } from "lodash";
import type { ValuesFlexContainer, ValuesFlexItem } from "../types";

interface ValueMap {
  container: ValuesFlexContainer;
  items: ValuesFlexItem[];
}
const viewProps = {
  name: false,
  collapsed: false,
  style: {
    padding: "10px",
    borderRadius: "3px",
    margin: "10px 0px"
  },
  theme: "monokai",
  collapseStringsAfterLength: 15,
  onEdit: false,
  onDelete: false,
  onAdd: false,
  displayObjectSize: true,
  enableClipboard: true,
  indentWidth: 2,
  displayDataTypes: false,
  iconStyle: "triangle",
  shouldCollapse: false,
  sortKeys: false,
  quotesOnKeys: true,
  groupArraysAfterLength: 100,
  onSelect: false,
  validationMessage: "Validation Error",
  defaultValue: null
} as const;
export default function JSONView() {
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
  const spreadProps = { ...viewProps, src: valuesMap };
  return <ReactJson {...spreadProps} />;
}
