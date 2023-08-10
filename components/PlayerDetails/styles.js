import styled from "styled-components";
import Image from "next/image";

export const StyledContainer = styled.div`
  margin: 80px 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center

  width: 320px;
  height: 280px;
  padding: 0px 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
`;

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledListItem = styled.li`
  width: 200px;
  margin: 5px 0px;
  padding-left: 20px;
`;

export const StyledSection = styled.section`
  margin: 100px 16%;
`;

export const StyledImage = styled(Image)`
  margin: 5px 0px;
`;
