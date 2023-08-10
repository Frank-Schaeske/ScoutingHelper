import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin-top: 150px;
  text-align: center;
`;

export const StyledMainIndex = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
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

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    margin-top: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px;
`;

export const StyledHeadline = styled.h2`
  margin: 5px;
  color: var(--primary-color);
`;

export const StyledSubHeadline = styled.h3`
  margin: 0;
  color: var(--primary-color);
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  background-color: white;
`;
