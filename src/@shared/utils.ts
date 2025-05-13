import { CSSProperties } from "react";

export function stringToInt(value: string): number | undefined {
  const num = parseInt(value, 10);
  if (!isNaN(num)) {
    return num;
  }
  return undefined;
}
export function chunk<T>(array: T[], size: number): T[][] {
  return array.reduce((all: T[][], current: T, i) => {
    return i % size === 0
      ? [...all, [current]]
      : all.map((c, ii) => {
          return ii === all.length - 1 ? [...c, current] : c;
        });
  }, []);
}
export function hasValue<T>(value: T | undefined): value is T {
  return value !== null && typeof value !== "undefined";
}
export function isObject(value: unknown): value is Record<string, unknown> {
  return !!value && hasValue(value) && typeof value === "object";
}
export function mergeClassName(
  defaultValue: string,
  className?: string
): string {
  return `${defaultValue}${className ? ` ${className}` : ""}`;
}
export function sortObjectKeys(
  a: Record<string, unknown>
): Record<string, unknown> {
  return Object.keys(a)
    .sort()
    .reduce((all, cur) => {
      return { ...all, [cur]: a[cur] };
    }, {});
}
export function partitionArray<Type>(
  array: Type[],
  filter: (e: Type, i: number, a: Type[]) => boolean
): [Type[], Type[]] {
  const fail: Type[] = [];
  const pass: Type[] = array.filter((e, i, a) => {
    if (filter(e, i, a)) return true;
    fail.push(e);
  });

  return [pass, fail];
}
// ensures object keys are in the same order then checks if they are equal via stringify.
export function objectsAreEqual(
  a: Record<string, unknown>,
  b: Record<string, unknown>
): boolean {
  if (!a || !b) {
    return false;
  }
  return (
    JSON.stringify(sortObjectKeys(a)) === JSON.stringify(sortObjectKeys(b))
  );
}

export function mergeStyle(
  defaultValue: CSSProperties,
  style?: CSSProperties
): CSSProperties {
  if (!style) {
    return defaultValue;
  }
  return { ...defaultValue, ...style };
}
export function extractFileName(src: string): string {
  return (
    src.split("\\")?.pop()?.split("/")?.pop()?.split(".")?.shift()?.trim() || ""
  );
}
export function extractFileType(src: string): string {
  return (
    src.split("\\")?.pop()?.split("/")?.pop()?.split(".")?.pop()?.trim() || ""
  );
}
export type ByOrderType<Type extends Record<string, unknown>> = Type & {
  order: number;
};
export function sortByOrder<Type extends { order: number }>(
  a: ByOrderType<Type>[]
): (Type & { order: number })[] {
  return a.sort((a, b) => {
    return a.order - b.order;
  });
}
// export function base64ToSrc(base64: string, name: string): string {
//   const [contentData, base64Data] = base64.split("base64,");
//   const contentType =
//     (((contentData || "").split(":") || []).pop() || "").split(";").shift() ||
//     "image/png";
//   const imageBlob = b64toBlob(base64Data, contentType);
//   const file = new File([imageBlob], name, { type: imageBlob.type });
//   return URL.createObjectURL(file);
// }

// (original height / original width) x new width = new height
export function getScaleFactor({
  maxHeight,
  width,
  outputWidth,
  outputHeight
}: {
  maxHeight: number;
  width: number;
  outputWidth: number;
  outputHeight: number;
}) {
  const base = Math.min(1, width / outputWidth);
  const testHeight = base * outputHeight;
  if (testHeight <= maxHeight) {
    return base;
  }
  return Math.min(1, maxHeight / outputHeight);
}
export function arrayFromNumber(count: number): number[] {
  return Array.from(Array(count).keys());
}
export interface MakeOptionsType<T = string> {
  label: T;
  key: T;
}
export function makeOptions<T = string>(names: T[]) {
  return names.map<MakeOptionsType<T>>((name) => ({
    label: name,
    key: name
  }));
}
