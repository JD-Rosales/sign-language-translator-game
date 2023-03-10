interface Tokens {
  [key: string]: {
    [key: number]: string;
  };
}

const darkTheme: Tokens = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45",
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0",
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

// function that reverses the color palette
function reverseTokens(tokens: Tokens): Tokens {
  const reversedTokens: Tokens = {};
  Object.entries(tokens).forEach(
    ([key, val]: [string, { [key: number]: string }]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj: { [key: number]: string } = {};
      for (let i = 0; i < length; i++) {
        reversedObj[parseInt(keys[i])] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    }
  );
  return reversedTokens;
}
export const lightTheme: Tokens = reverseTokens(darkTheme);

// mui theme settings
export const themeSettings = (mode: "dark" | "light") => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...darkTheme.primary,
              main: darkTheme.primary[400],
              light: darkTheme.primary[400],
            },
            secondary: {
              ...darkTheme.secondary,
              main: darkTheme.secondary[300],
            },
            neutral: {
              ...darkTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.primary[600],
              paper: darkTheme.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...lightTheme.primary,
              main: darkTheme.grey[50],
              light: darkTheme.grey[100],
            },
            secondary: {
              ...lightTheme.secondary,
              main: darkTheme.secondary[600],
              light: darkTheme.secondary[700],
            },
            neutral: {
              ...lightTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.grey[0],
              paper: darkTheme.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
