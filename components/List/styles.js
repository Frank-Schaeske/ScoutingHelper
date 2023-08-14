import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 120px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledListItem = styled.li`
  max-width: 400px;
  min-height: 65px;
  display: flex;
  align-items: center;
  padding: 5px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  padding-right: 5px;
`;

export const TextContainer = styled.div`
  padding: 5px;
`;
