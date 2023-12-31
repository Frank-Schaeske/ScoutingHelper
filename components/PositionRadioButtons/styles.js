import styled from "styled-components";

export const MyButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: 45px;
  background-color: var(--secondary-color);
`;

export const RadioInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + span {
    box-shadow: 0 0 0 0.0625em var(--primary-color);
    background-color: #deffe5;
    z-index: 1;
    color: var(--primary-color);
  }

  &:focus {
    outline: 0;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 4px #b5c9fc;
  }
`;

export const LabelSpan = styled.span`
  display: block;
  cursor: pointer;
  background-color: #fff;
  padding: 0.375em 0.75em;
  position: relative;
  margin-left: 0.0625em;
  box-shadow: 0 0 0 0.0625em #b5bfd9;
  letter-spacing: 0.05em;
  color: #3e4963;
  text-align: center;
  transition: background-color 0.5s ease;
`;

export const FirstChildLabelSpan = styled(LabelSpan)`
  border-radius: 0.375em 0 0 0.375em;
`;

export const LastChildLabelSpan = styled(LabelSpan)`
  border-radius: 0 0.375em 0.375em 0;
`;
