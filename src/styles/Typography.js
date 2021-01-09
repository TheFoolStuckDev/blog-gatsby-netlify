import { createGlobalStyle } from 'styled-components';

import "@fontsource/open-sans";
import "@fontsource/merriweather/300.css";
import "@fontsource/merriweather/400.css";

const Typography = createGlobalStyle`
  html {
    font-family: "Merriweather", OpenSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
`;

export default Typography;
