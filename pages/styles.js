import styled from "styled-components";

export const StyledMainHome = styled.main`
  display: flex;
  justify-content: center;
`;

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin-top: 150px;
  text-align: center;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  width: 300px;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    margin-top: 10px;
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;
