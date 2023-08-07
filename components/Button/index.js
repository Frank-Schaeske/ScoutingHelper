import styled from "styled-components";

export const StyledButton = styled.button`
  --color: var(--primary-color);
  --background-color: #ffffff;

  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 2.5em;
  line-height: 3em;
  overflow: hidden;
  margin: 20px auto;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  background-color: var(--background-color);
  border: 2px solid var(--color);
  border-radius: 20px;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 200px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  &:hover {
    color: white;
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  &:hover::before {
    top: -30px;
    left: -30px;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 2;
`;