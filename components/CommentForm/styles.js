import styled from "styled-components";
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  margin: 10px 16%;
`;

export const StyledTextarea = styled.textarea`
  width: 320px;
  height: 100px;
  padding: 7px 35px;
  margin: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  font-family: ${roboto.style.fontFamily}, Arial, sans-serif;
  font-size: 16px;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  margin: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
`;
