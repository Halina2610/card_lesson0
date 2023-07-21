import {createGlobalStyle} from "styled-components";
import {colorsTheme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colorsTheme.colors.light};
    margin: 0;
    font-family: 'Roboto', sans-serif;//import!!!!!!!!!!
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`