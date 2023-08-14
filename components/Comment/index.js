import { StyledParagraph, StyledComment } from "./styles";

export default function Comment({ player }) {
  return (
    <>
      <StyledParagraph>Comment:</StyledParagraph>
      <StyledComment>{player.comment}</StyledComment>
    </>
  );
}
