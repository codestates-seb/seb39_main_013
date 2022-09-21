import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'S-CoreDream-3Light';
    }

    html {    
        position: relative;
        min-height: 100%;
        margin: 0;
    }

    body {
        min-height: 100%;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    .App {
        /* min-height: 100%;
        position: relative; */
        padding-bottom: 320px;
    }
`;

export default GlobalStyled;
