import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, span, p {
    font-family: 'Roboto', sans-serif;
  }
`