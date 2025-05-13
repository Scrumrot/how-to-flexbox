import { ReactNode, useReducer, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "react-toastify/dist/ReactToastify.css";
import {
  createTheme,
  ThemeProvider,
  ThemeOptions,
  PaletteOptions
} from "@mui/material/styles";
import {
  defaultThemeModeState,
  ContextThemeModeProvider,
  ThemeModeOptionsEnum,
  ThemeModeStateReducer,
  themeModeStateReducer
} from "./ContextThemeMode";
import CssBaseline from "@mui/material/CssBaseline";
declare module "@mui/material/styles" {
  interface Palette {
    discord: Palette["primary"];
  }
  interface PaletteOptions {
    discord: PaletteOptions["primary"];
  }
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface TypeBackground {
    grid?: string;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    discord: true;
  }
}

export const typography: ThemeOptions["typography"] = {
  h1: {
    fontFamily: '"Raleway", "sans-serif"',
    fontWeight: 300
  },
  h2: {
    fontFamily: '"Raleway", "sans-serif"',
    fontWeight: 200
  },
  h3: {
    fontFamily: '"Raleway", "sans-serif"',
    fontWeight: 300
  },
  h4: {
    fontFamily: '"Raleway", "sans-serif"',
    fontWeight: 400
  },
  h5: {
    fontFamily: '"Raleway", "sans-serif"',
    fontWeight: 400
  },
  h6: {
    fontFamily: '"Raleway", "sans-serif"',
    fontWeight: 400
  },
  body1: {
    fontFamily: '"europa", "sans-serif"',
    fontWeight: 700
  },
  body2: {
    fontFamily: '"europa", "sans-serif"',
    fontWeight: 600
  }
};

export const baseColors = {
  // primary: {
  //   main: "#e9e0ea"
  //   // main: '#ee2561',
  //   // contrastText: '#ffffff',
  // },
  // secondary: {
  //   main: "#9c3fc5",
  //   contrastText: "#ffffff"
  // },
  // info: {
  //   main: "#bcbf60"
  // },
  // divider: "#34343d",
  // error: {
  //   main: "#EE2560"
  // },
  // success: {
  //   main: "#8bd080"
  // },
  // warning: {
  //   main: "#ffdc32"
  // },
  discord: {
    main: "rgb(86, 99, 238)",
    light: "rgb(116 126 241)",
    dark: "rgb(73, 84, 200)"
  }
};
export const basePalette: PaletteOptions = baseColors;

export const themeDark: ThemeOptions = {
  palette: {
    mode: "dark",
    ...basePalette,
    background: {
      grid:
        "linear-gradient(-90deg,rgba(255,255,255,.02) 1px,transparent 0),linear-gradient(rgba(255,255,255,.02) 1px,transparent 0),linear-gradient(-90deg,rgba(255,255,255,.03) 1px,transparent 0),linear-gradient(rgba(255,255,255,.03) 1px,transparent 0),linear-gradient(transparent 4px,#0a0a0a 0,#0a0a0a 97px,transparent 0),linear-gradient(-90deg,#1a1a1a 1px,transparent 0),linear-gradient(-90deg,transparent 4px,#0a0a0a 0,#0a0a0a 97px,transparent 0),linear-gradient(#1a1a1a 1px,transparent 0),#0a0a0a"
    }
  },
  // typography,
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "inherit"
      },
      styleOverrides: {
        root: {
          // minHeight: 12
          // backgroundColor: "rgba(46,18,59,.1)",
          // backgroundImage: "unset",
          // color: "#fff"
        }
      }
    }
  }
};
export const themeLight: ThemeOptions = {
  palette: {
    mode: "light",
    ...basePalette,
    background: {
      grid:
        "linear-gradient(-90deg,rgba(0,0,0,.02) 1px,transparent 0),linear-gradient(rgba(0,0,0,.02) 1px,transparent 0),linear-gradient(-90deg,rgba(0,0,0,.03) 1px,transparent 0),linear-gradient(rgba(0,0,0,.03) 1px,transparent 0),linear-gradient(transparent 4px,#f5f5f5 0,#f5f5f5 97px,transparent 0),linear-gradient(-90deg,#e5e5e5 1px,transparent 0),linear-gradient(-90deg,transparent 4px,#f5f5f5 0,#f5f5f5 97px,transparent 0),linear-gradient(#e5e5e5 1px,transparent 0),#f5f5f5"
    }
  },
  // typography,
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "inherit"
      },
      styleOverrides: {
        root: {
          // minHeight: 12
          // backgroundColor: "#1e1e28",
          // color: "#fff"
        }
      }
    }
  }
};
export default function ProviderMuiTheme({
  children
}: {
  children: ReactNode;
}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [modeState, modeDispatch] = useReducer<ThemeModeStateReducer>(
    themeModeStateReducer,
    defaultThemeModeState
  );
  const isDark =
    (modeState.mode === ThemeModeOptionsEnum.System && prefersDarkMode) ||
    modeState.mode === ThemeModeOptionsEnum.Dark;
  const theme = useMemo(() => createTheme(isDark ? themeDark : themeLight), [
    isDark
  ]);
  console.log("theme", theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextThemeModeProvider
        value={{
          modeState,
          modeDispatch,
          ThemeModeOptionsEnum,
          prefersDarkMode
        }}
      >
        {children}
      </ContextThemeModeProvider>
    </ThemeProvider>
  );
}
