import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: rgb(121, 172, 120);
    --background-color: rgb(208, 231, 210);
    --time: 0.2s;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const buttonStyle = css`
    background-color: var(--main-color);
    text-align: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: inherit;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--time);

    &:hover {
        color: #fff;
        filter: brightness(110%);
    }
`