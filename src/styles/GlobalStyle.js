import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
  }

  html, body {
  display: block;
  margin: 0;
  padding: 0;
  color: #e6ddf9;
  font-size: 14px;
  }

  body {
  height: 100vh;
  width: 100vw;
}

  :root {
  background-image: radial-gradient(ellipse at top left, #7f50e4, #4c05d0);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

`;

export default GlobalStyle;
