import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default createGlobalStyle`
:root {
  --primary-color: #009900;
  --secondary-color: #FFFFFF;
  --tertiary-color: #000000;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily}, Arial, sans-serif;
  }
`;
