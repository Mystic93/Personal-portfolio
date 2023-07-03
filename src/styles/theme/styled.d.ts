import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      button: string;
      light: string;
      dark: string;
      title: string;
    };

    fonts: {
      primary: string;
    };
  }
}
