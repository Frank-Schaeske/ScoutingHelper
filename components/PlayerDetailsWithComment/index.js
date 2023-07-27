import styled from "styled-components";

export default function PlayerDetailsWithComment({ players, id }) {
  const currentPlayer = players.find(
    (player) => player.response[0].player.id === id * 1
  );

  return (
    <>
      <StyledSection>
        <p>
          Name: {currentPlayer.response[0].player.name}
          <br />
          Team: {currentPlayer.response[0].statistics[0].team.name}
          <br />
          Season: {currentPlayer.parameters.season}/
          {currentPlayer.parameters.season * 1 + 1}
          <br />
          Goals: {currentPlayer.response[0].statistics[0].goals.total}
          <br />
          <br />
          Comment: {currentPlayer.comment}
        </p>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  position: fixed;
  top: 10%;
  left: 20%;
`;
