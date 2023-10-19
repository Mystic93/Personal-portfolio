import { DefaultTheme } from "styled-components";
import "@fontsource/pirata-one";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#E9CDB3",
    secondary: "#D0A37A",
    yellow: "rgb(236, 121, 85)",
    light: "#FFFFFF",
    dark: "#000000",
    bluesky: "#55b5fa",
    aboutBlue: "rgb(61, 90, 128)",
    darkBackground: "#1F1A26",
    lightBackground: "#D1C7E0",
    primaryText: "#EAE6F3",
    secondaryText: " #BAAED2",
  },

  fonts: {
    primary: "Pirata One",
    secondary: "Poppins",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#2E77D0",
    secondary: "#FF6B6B",
    yellow: "#F4D35E",
    light: "#1A1A1A",
    dark: "#FFFFFF",
    bluesky: "#007BFF",
    aboutBlue: "#4A90E2",
    darkBackground: "#121212",
    lightBackground: "#2E2E2E",
    primaryText: "#FFFFFF",
    secondaryText: "#A6A6A6",
  },
  fonts: {
    primary: "Pirata One",
    secondary: "Poppins",
  },
};

export default lightTheme;
