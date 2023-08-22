import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.gallery};
    }
`;