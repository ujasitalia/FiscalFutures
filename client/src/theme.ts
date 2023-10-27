export const tokens = {
  white: {
    100: "#f7f5f5",
    200: "#efecea",
    300: "#e6e2e0",
    400: "#ded9d5",
    500: "#d6cfcb",
    600: "#aba6a2",
    700: "#807c7a",
    800: "#565351",
    900: "#2b2929",
  },
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },

  primary: {
    // light green
    100: "#e2fffb",
    200: "#c5fff6",
    300: "#a9fff2",
    400: "#8cffed",
    500: "#6fffe9",
    600: "#59ccba",
    700: "#43998c",
    800: "#2c665d",
    900: "#16332f",
  },
  secondary: {
    100: "#fceadb",
    200: "#f8d5b7",
    300: "#f5c093",
    400: "#f1ab6f",
    500: "#ee964b",
    600: "#be783c",
    700: "#8f5a2d",
    800: "#5f3c1e",
    900: "#301e0f",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#1c2541",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.white,
      main: tokens.white[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.white[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.white[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.white[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.white[700],
    },
  },
};
