import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
/* @font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
} */
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'S-CoreDream-3Light'; */
        font-family: 'Pretendard-Regular';
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

    li {
        list-style: none;
    }

    .App {
        padding-bottom: 180px;
    }
`;

export default GlobalStyled;
