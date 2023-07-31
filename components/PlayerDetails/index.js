import styled from "styled-components";

export default function PlayerDetails({ player }) {
  if (player?.response?.length > 0) {
    return (
      <StyledList>
        <StyledListItem>{player.response[0].player.name}</StyledListItem>
        <StyledListItem>
          {player.response[0].statistics[0].team.name}
        </StyledListItem>
        <StyledListItem>
          Season: {player.parameters.season}/
          {parseInt(player.parameters.season, 10) + 1}
        </StyledListItem>
        <StyledListItem>
          Goals: {player.response[0].statistics[0].goals.total}
        </StyledListItem>
      </StyledList>
    );
  } else {
    return (
      <StyledSection>
        <p>No player found with this name in this team for this season.</p>
        <p>
          Please make sure not to use umlauts, e.g. Fullkrug instead of
          Füllkrug.
        </p>
      </StyledSection>
    );
  }
}

const StyledList = styled.ul`
  margin: 100px 16% 30px;
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
  list-style-type: none;
`;

const StyledListItem = styled.li`
  margin: 5%;
`;

const StyledSection = styled.section`
  margin: 100px 16%;
`;
