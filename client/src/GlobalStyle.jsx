import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }


`;

export default GlobalStyled;
