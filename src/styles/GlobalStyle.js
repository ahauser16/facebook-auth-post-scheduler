import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
  }

  body {
  margin: 0;
  color: #e6ddf9;
  font-size: 14px;
  display: block;
  }

  :root {
  min-height: 100vh;
  /* font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.2em; */
  background-image: radial-gradient(ellipse at top left, #7f50e4, #4c05d0);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

`;

export default GlobalStyle;
