import styled from "styled-components";
import { useState } from "react";

export default function PositionRadioButtons() {
  const [selectedOption, setSelectedOption] = useState("Women");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <MyDictContainer>
        <label>
          <RadioInput
            type="radio"
            name="radio"
            value="Women"
            checked={selectedOption === "Women"}
            onChange={handleOptionChange}
          />
          <FirstChildLabelSpan>Women</FirstChildLabelSpan>
        </label>
        <label>
          <RadioInput
            type="radio"
            name="radio"
            value="Men"
            checked={selectedOption === "Men"}
            onChange={handleOptionChange}
          />
          <LabelSpan>Men</LabelSpan>
        </label>
        <label>
          <RadioInput
            type="radio"
            name="radio"
            value="Divided"
            checked={selectedOption === "Divided"}
            onChange={handleOptionChange}
          />
          <LastChildLabelSpan>Divided</LastChildLabelSpan>
        </label>
    </MyDictContainer>
  );
}

const MyDictContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
`;

const RadioInput = styled.input`
  /* Styles for .mydict input[type="radio"] */
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + span {
    /* Styles for .mydict input[type="radio"]:checked + span */
    box-shadow: 0 0 0 0.0625em #0043ed;
    background-color: #dee7ff;
    z-index: 1;
    color: #0043ed;
  }

  &:focus {
    /* Styles for :focus */
    outline: 0;
    border-color: #2260ff;
    box-shadow: 0 0 0 4px #b5c9fc;
  }
`;

const LabelSpan = styled.span`
  /* Styles for label span */
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

const FirstChildLabelSpan = styled(LabelSpan)`
  /* Styles for label:first-child span */
  border-radius: 0.375em 0 0 0.375em;
`;

const LastChildLabelSpan = styled(LabelSpan)`
  /* Styles for label:last-child span */
  border-radius: 0 0.375em 0.375em 0;
`;
