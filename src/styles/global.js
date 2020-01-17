import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:100&display=swap');

    #root {
        min-height: 100%
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    html, body {
        width: 100%;
    }

    body {
    -webkit-font-smoothing: antialiased;

  }
    
`;
