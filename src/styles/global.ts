//2081e2
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #2081e2;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
    }
    body, input, textarea, button {
      font-family: 'Courier Prime', monospace;
      font-weight: 400;
    }
    h1, h1, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button, a {
        cursor: pointer;
    }
`;
