import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'Metropolis-Light, Helvetica, Arial, sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    color: #333333;
    font-size: 16px;
    overflow: auto;
}

html{
  height: 100%;
}

body{
  min-height: 100%;
}

h1{
  font-family: Jules;
  font-weight: 100;
}

`;
