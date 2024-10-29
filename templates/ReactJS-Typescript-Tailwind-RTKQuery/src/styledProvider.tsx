import { ThemeProvider } from "styled-components";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const theme = {
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
    },
  },
  colors: {
    primary: "#E89E46",
    primaryP2: "#628AF3",
    primaryP6: "#D0DCFC",
    primaryP7: "#E0E8FD",
    primaryP8: "#FDF6ED",
    secondary: "#ffffff",
    mainBg: "#130F26",
    grey: "#9EA2AC",
    error: "#EF0909",
    errorE1: "#DE2C28",
    errorE8: "#F7CBCA",
    errorE9: "#F9DAD9",
    success: "#138D42",
    successS1: "#69A333",
    successS8: "#D9EDC6",
    successS9: "#E1F1D3",
    warning: "#f79319",
    background: "#fbfcff",
    backgroundB1: "#f9f9f9",
    greyBorder: "rgba(66, 114, 241, 0.10)",
    inputBorderColor: "rgba(66, 114, 241, 0.10)",
    gray: "#D9D9D9",
    textT1: "#000000",
    textT5: "#6E6E6E",
    textT6: "#999999",
    textT7: "#c4c4c4",
    textT8: "#D5D5D5",
    textT10: "#E6E6E6",
    textT11: "#EEEEEE",
    textT12: "#FAFAFA",
    yellow: "#FFC107",
    yellowY8: "#FFF0C2",

    card1bg: "#E0DCFE",
    card2bg: "#E4FBF8",
    card3bg: "#FFE2CD",
    card4bg: "#DAF3FF",
    card1text: "#624BFF",
    card2text: "#02A6A7",
    card3text: "#F56700",
    card4text: "#01A2EF",
  },
  grey: {
    1: "#9ea2ac66",
    2: "#d8dade",
    3: "rgba(158, 162, 172, 0.20)",
  },
  light: {
    blue: "#ecf1fe",
    primaryP8: "#f0f4fe",
  },
};

const StyledThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
