import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(90deg, #B6003C 0%, #AB4707 20%, #8B6E00 40%, #5D891F 60%, #009D63 80%, #00ACA9 100%);
  }
`;

export default Global;
