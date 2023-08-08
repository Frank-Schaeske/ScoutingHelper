import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --primary-color: #009900;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: arial;
  }
`;
