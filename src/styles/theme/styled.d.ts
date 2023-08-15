import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      yellow: string;
      light: string;
      dark: string;
      bluesky: string;
      aboutBlue: string;
      lightBackground: string;
      darkBackground: string;
      primaryText: string;
      secondaryText: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
