import styled from "styled-components";

export default function Comment({ player }) {
  return (
    <>
      <p>Comment:</p>
      <StyledSection>
        <p>{player.comment}</p>
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
  height: 150px;
  padding: 0px 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin: 1% 16%;
`;
