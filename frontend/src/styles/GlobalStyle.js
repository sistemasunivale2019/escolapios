import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: none;
}

html, body, #root{
    width: 100vw;
    height: 100vh;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
}

button, input, textarea{
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 18px;
}


`;
