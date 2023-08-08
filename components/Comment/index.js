import styled from "styled-components";

export default function Comment({ player }) {
  return (
    <>
      <StyledParagraph>Comment:</StyledParagraph>
      <StyledSection>
        <StyledComment>{player.comment}</StyledComment>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  width: 320px;
  height: 100px;
  padding: 5px 35px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
`;

const StyledParagraph = styled.p`
  margin: 5px;
`;

const StyledComment = styled.p`
  width: 260px;
  height: 80px;
  margin: 10px 0;
  word-wrap: break-word;

  &::before {
    content: "\";
    white-space: pre;
  }
`;
