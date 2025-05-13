import { createContext, useContext } from "react";
export enum ThemeModeOptionsEnum {
  System = "system",
  Dark = "dark",
  Light = "light",
  Open = "open",
  Close = "close",
  Toggle = "toggle"
}

export interface ThemeModeState {
  mode: ThemeModeOptionsEnum;
  open: boolean;
}

export interface SetSystemThemeMode {
  type: ThemeModeOptionsEnum.System;
}
export interface SetDarkThemeMode {
  type: ThemeModeOptionsEnum.Dark;
}
export interface SetLightThemeMode {
  type: ThemeModeOptionsEnum.Light;
}

export interface SetOpenThemeMode {
  type: ThemeModeOptionsEnum.Open;
}
export interface SetCloseThemeMode {
  type: ThemeModeOptionsEnum.Close;
}

export interface SetToggleThemeMode {
  type: ThemeModeOptionsEnum.Toggle;
}

export type ThemeModeReducerAction =
  | SetSystemThemeMode
  | SetDarkThemeMode
  | SetLightThemeMode
  | SetOpenThemeMode
  | SetCloseThemeMode
  | SetToggleThemeMode;

export type ThemeModeStateReducer = (
  mode: ThemeModeState,
  action: ThemeModeReducerAction
) => ThemeModeState;

export type ThemeModeDispatchType = (action: ThemeModeReducerAction) => void;

export interface ContextThemeModeValue {
  modeState: ThemeModeState;
  modeDispatch: ThemeModeDispatchType;
  ThemeModeOptionsEnum: typeof ThemeModeOptionsEnum;
  prefersDarkMode: boolean;
}

export function themeModeStateReducer(
  themeModeState: ThemeModeState,
  action: ThemeModeReducerAction
): ThemeModeState {
  switch (action.type) {
    case ThemeModeOptionsEnum.Open:
      return {
        ...themeModeState,
        open: true
      };
    case ThemeModeOptionsEnum.Close:
      return {
        ...themeModeState,
        open: false
      };
    case ThemeModeOptionsEnum.Toggle:
      return {
        ...themeModeState,
        open: !themeModeState.open
      };
    default:
      return {
        mode: action.type,
        open: themeModeState.open
      };
  }
}

/*
========================== Context ==========================
*/

export const defaultThemeModeState: ThemeModeState = {
  mode: ThemeModeOptionsEnum.Dark,
  open: false
};

const ContextThemeMode = createContext<ContextThemeModeValue>({
  modeState: defaultThemeModeState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  modeDispatch: () => {},
  ThemeModeOptionsEnum: ThemeModeOptionsEnum,
  prefersDarkMode: true
});
ContextThemeMode.displayName = "ContextThemeMode";

export const ContextThemeModeProvider = ContextThemeMode.Provider;
export const useContextThemeMode = () => useContext(ContextThemeMode);
