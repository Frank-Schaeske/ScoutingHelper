import {
  MyButtonContainer,
  RadioInput,
  FirstChildLabelSpan,
  LabelSpan,
  LastChildLabelSpan,
} from "./styles";

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
