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

    a {
        text-decoration: none;
    }

`;

export default GlobalStyled;
