import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      yellow: string;
      light: string;
      dark: string;
      title: string;
      bluesky: string;
      aboutBlue: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
