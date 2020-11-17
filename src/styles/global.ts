import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  :root {
    --white-color: #fff;
    --background-color: #f0f0f5;
    --light-color: #cbcbd6;
    --medium-color: #a8a8b3;
    --dark-color: #3d3d4d;
    --darker-color: #3a3a3a;
    --error-color: #c53030;

    --button-form-color: #04D361;
    --button-form-color-hover: #04BA56;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-color) url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
