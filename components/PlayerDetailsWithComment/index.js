import styled from "styled-components";

export default function PlayerDetailsWithComment({ players, id }) {
  console.log(players, id);
  const currentPlayer = players.find(
    (player) => player.response[0].player.id === id * 1
  );
  console.log(currentPlayer);

  return (
    <StyledSection>
      <p>{currentPlayer.response[0].player.name}</p>
      <p>{currentPlayer.response[0].statistics[0].team.name}</p>
      <p>
        Season: {currentPlayer.parameters.season}/
        {currentPlayer.parameters.season * 1 + 1}
      </p>
      <p>Goals: {currentPlayer.response[0].statistics[0].goals.total}</p>
      <p>Comment: {currentPlayer.comment}</p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  list-style-type: none;
  margin: 20% 25% 10% 20%;
`;
