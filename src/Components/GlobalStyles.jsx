import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
${reset};
* {
  box-sizing: border-box;
}
body {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  background-color: rgba(20, 20, 20, 1);
  color: #ffffff;
  padding-top: 50px;
}
a {
  text-decoration: none;
  color: inherit;
}`;

export default globalStyles;
