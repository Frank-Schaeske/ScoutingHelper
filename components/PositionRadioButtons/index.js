import styled from "styled-components";

export default function PositionRadioButtons({
  selectedPosition,
  setSelectedPosition,
}) {
  function handlePositionChange(event) {
    setSelectedPosition(event.target.value);
  }

  return (
    <MyButtonContainer>
      <label>
        <RadioInput
          type="radio"
          name="radio"
          value="All"
          checked={selectedPosition === "All"}
          onChange={handlePositionChange}
        />
        <FirstChildLabelSpan>All</FirstChildLabelSpan>
      </label>
      <label>
        <RadioInput
          type="radio"
          name="radio"
          value="Goalkeeper"
          checked={selectedPosition === "Goalkeeper"}
          onChange={handlePositionChange}
        />
        <LabelSpan>GK</LabelSpan>
      </label>
      <label>
        <RadioInput
          type="radio"
          name="radio"
          value="Defender"
          checked={selectedPosition === "Defender"}
          onChange={handlePositionChange}
        />
        <LabelSpan>DEF</LabelSpan>
      </label>
      <label>
        <RadioInput
          type="radio"
          name="radio"
          value="Midfielder"
          checked={selectedPosition === "Midfielder"}
          onChange={handlePositionChange}
        />
        <LabelSpan>MF</LabelSpan>
      </label>
      <label>
        <RadioInput
          type="radio"
          name="radio"
          value="Attacker"
          checked={selectedPosition === "Attacker"}
          onChange={handlePositionChange}
        />
        <LastChildLabelSpan>AT</LastChildLabelSpan>
      </label>
    </MyButtonContainer>
  );
}

const MyButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  top: 90px;
`;

const RadioInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + span {
    box-shadow: 0 0 0 0.0625em #0043ed;
    background-color: #dee7ff;
    z-index: 1;
    color: #0043ed;
  }

  &:focus {
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
