export const cssUnits = Object.freeze({
  px: "px",
  cm: "cm",
  mm: "mm",
  Q: "Q",
  in: "in",
  pc: "pc",
  pt: "pt",
  em: "em",
  rem: "rem",
  "%": "%",
  vw: "vw",
  vh: "vh",
  vmin: "vmin",
  vmax: "vmax",
  ch: "ch",
  ex: "ex",
  lh: "lh",
  rlh: "rlh",
  vb: "vb",
  svw: "svw",
  svh: "svh",
  lvw: "lvw",
  lvh: "lvh",
  dvw: "dvw",
  dvh: "dvh"
} as const);
export type CssCalc = `calc(${string})`;
export type Units = keyof typeof cssUnits;

type CssUnits =  Units | CssCalc;
export default CssUnits;
