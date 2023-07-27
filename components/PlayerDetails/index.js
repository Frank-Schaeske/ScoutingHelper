import styled from "styled-components";

export default function PlayerDetails({ player }) {
  if (player?.response?.length > 0) {
    return (
      <StyledSection>
        <p>{player.response[0].player.name}</p>
        <p>{player.response[0].statistics[0].team.name}</p>
        <p>
          Season: {player.parameters.season}/{player.parameters.season * 1 + 1}
        </p>
        <p>Goals: {player.response[0].statistics[0].goals.total}</p>
      </StyledSection>
    );
  } else {
    return (
      <StyledSection>
        <p>No player found with this name in this team for this season.</p>
        <p>
          {" "}
          Please make sure not to use umlauts.
        </p>
      </StyledSection>
    );
  }
}

const StyledSection = styled.section`
  list-style-type: none;
  position: fixed;
  top: 5%;
  left: 20%;
`;
