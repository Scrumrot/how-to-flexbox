import { v4 as uuid } from "uuid";
import type { ValuesFlexContainer, ValuesFlexItem, MetaValue } from "./schemas";

import {
  defaultValuesFlexContainer,
  defaultValuesFlexItem,
  defaultFlexFormValues,
  defaultMetaValue
} from "./schemas";
import { arrayFromNumber } from "@shared";
export function makeItem(containerId: string): ValuesFlexItem {
  return { ...defaultValuesFlexItem, id: uuid(), containerId };
}

export function makeContainer(): ValuesFlexContainer {
  return { ...defaultValuesFlexContainer, id: uuid() };
}

export function createContainerAndItems(
  numberOfItems: number
): { container: ValuesFlexContainer[]; items: ValuesFlexItem[] } {
  const container = [makeContainer()];
  const items: ValuesFlexItem[] = arrayFromNumber(numberOfItems).map<
    ValuesFlexItem
  >(() => {
    const basis = `auto`;
    const newItem = makeItem(container[0].id);
    return {
      ...newItem,
      flex: `${newItem.flexGrow} ${newItem.flexShrink} ${basis}`,
      flexBasis: `${basis}`
    } as ValuesFlexItem;
  });

  return { container, items };
}

export function makeFormMeta(meta?: Partial<MetaValue>): MetaValue {
  return { ...defaultMetaValue, ...(meta || {}) };
}

export function createFlexFormValues() {
  const { container, items } = createContainerAndItems(
    defaultFlexFormValues.meta.defaultNumberOfItems
  );
  const meta = makeFormMeta({
    active: { containerId: container[0].id, itemId: items[0].id }
  });
  return { ...defaultFlexFormValues, containers: container, items, meta };
}
