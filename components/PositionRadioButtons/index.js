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
      <label htmlFor="all">
        <RadioInput
          type="radio"
          name="all"
          id="all"
          value="All"
          checked={selectedPosition === "All"}
          onChange={handlePositionChange}
        />
        <FirstChildLabelSpan>All</FirstChildLabelSpan>
      </label>
      <label htmlFor="goalkeeper">
        <RadioInput
          type="radio"
          name="goalkeeper"
          id="goalkeeper"
          value="Goalkeeper"
          checked={selectedPosition === "Goalkeeper"}
          onChange={handlePositionChange}
        />
        <LabelSpan>GK</LabelSpan>
      </label>
      <label htmlFor="defender">
        <RadioInput
          type="radio"
          name="defender"
          id="defender"
          value="Defender"
          checked={selectedPosition === "Defender"}
          onChange={handlePositionChange}
        />
        <LabelSpan>DEF</LabelSpan>
      </label>
      <label htmlFor="midfielder">
        <RadioInput
          type="radio"
          name="midfielder"
          id="midfielder"
          value="Midfielder"
          checked={selectedPosition === "Midfielder"}
          onChange={handlePositionChange}
        />
        <LabelSpan>MF</LabelSpan>
      </label>
      <label htmlFor="attacker">
        <RadioInput
          type="radio"
          name="attacker"
          id="attacker"
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
  align-items: center;
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  height: 45px;
  background-color: white;
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

const LabelSpan = styled.span`
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
  border-radius: 0.375em 0 0 0.375em;
`;

const LastChildLabelSpan = styled(LabelSpan)`
  border-radius: 0 0.375em 0.375em 0;
`;
