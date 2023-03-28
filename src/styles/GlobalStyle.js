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
  min-height: 100vh;
  background-image: radial-gradient(ellipse at top left, #c7352b, #3174d5, #feff41);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }
`;

export default GlobalStyle;
