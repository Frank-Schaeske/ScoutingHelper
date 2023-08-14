import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary-color);
  border-style: solid;
  border-color: var(--primary-color);
  border-width: 2px 1px 2px 2px;
  color: lightgrey;
  height: 60px;
  width: 50%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  color: ${(props) => (props.isActive ? "var(--tertiary-color)" : "lightgrey")};
`;

export const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary-color);
  border-style: solid;
  border-color: var(--primary-color);
  border-width: 2px 1px 2px 2px;
  color: lightgrey;
  height: 60px;
  width: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  color: ${(props) => (props.isActive ? "var(--tertiary-color)" : "lightgrey")};
`;
