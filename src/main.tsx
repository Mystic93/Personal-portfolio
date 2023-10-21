import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/pirata-one";
import "@fontsource/poppins";
import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={appRouter} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
