import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
img {
  display: block;
  height: auto;
  max-width:100%;
} 

ul,
ol,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  list-style: none;
  margin: 0;
  padding: 0;
}`;
