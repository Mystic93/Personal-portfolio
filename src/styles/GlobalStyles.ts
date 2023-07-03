import { createGlobalStyle } from "styled-components";
import "@fontsource/pirata-one";

const GlobalStyle = createGlobalStyle`

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
      font-family: inherit
  }

  body {
    margin: 0;
    font-family: "Pirata One",cursive;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font : inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  input {
    font-family: inherit;
    border: none;
  }

  button {
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  img{
    max-width: 100%;
    padding: 0;
  }


`;

export default GlobalStyle;
