import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  margin: 100px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSelect = styled.select`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  padding-left: 10px;
  margin: 5px 20px 20px;
  width: 210px;
  font-family: system-ui;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  padding-left: 10px;
  margin: 5px 20px 50px;
  width: 210px;
  height: 22px;
  font-family: system-ui;
  font-size: 16px;

  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  padding-left: 35px;
`;
