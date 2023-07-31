import styled from "styled-components";

export default function Comment({ player }) {
  return (
    <>
    <StyledParagraph>Comment:</StyledParagraph>
    <StyledSection>
      <StyledParagraphComment>{player.comment}</StyledParagraphComment>
    </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  max-width: 400px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 250px;
  height: 200px;
  padding: 0px 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin: 1% 16%;
`;

const StyledParagraph = styled.p`
margin: 5% 10% 0% 17%;
`;

const StyledParagraphComment = styled.p`
  margin: 5%;
`;