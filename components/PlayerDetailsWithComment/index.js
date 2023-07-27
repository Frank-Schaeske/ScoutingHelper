import styled from "styled-components";

export default function PlayerDetailsWithComment({ player }) {
  return (
    <StyledSection>
      <p>{player.response[0].player.name}</p>
      <p>{player.response[0].statistics[0].team.name}</p>
      <p>
        Season: {player.parameters.season}/{player.parameters.season * 1 + 1}
      </p>
      <p>Goals: {player.response[0].statistics[0].goals.total}</p>
      <p>Comment: {player.comment}</p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  list-style-type: none;
  margin: 20% 25% 10% 20%;
`;
