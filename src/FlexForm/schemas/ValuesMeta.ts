export type OutputStyleType = "mui" | "css";
export interface ActiveType {
  containerId: string;
  itemId: string;
}
export interface MetaValue {
  active: ActiveType;
  defaultNumberOfItems: number;
  outputStyle: "mui" | "css";
}

export const defaultMetaValue: MetaValue = Object.freeze({
  active: {
    containerId: "",
    itemId: ""
  },
  defaultNumberOfItems: 4,
  outputStyle: "css"
} as const);
