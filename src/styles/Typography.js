import { createGlobalStyle } from 'styled-components';

import "@fontsource/open-sans";

const Typography = createGlobalStyle`
  html {
    font-family: OpenSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
`;

export default Typography;
