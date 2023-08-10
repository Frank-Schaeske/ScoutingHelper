import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    margin-top: 10px;
  }
`;

export const LinkContainerRanking = styled.div`
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
