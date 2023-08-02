import styled from "styled-components";
import Image from "next/image";

export default function PlayerDetails({ player }) {
  if (player?.response?.length > 0) {
    return (
      <StyledContainer>
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
        <StyledImage
          src={player.response[0].player.photo}
          height={80}
          width={80}
          alt={player.response[0].player.name}
        />
      </StyledContainer>
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

const StyledContainer = styled.div`
  margin: 100px 16% 30px;
  max-width: 350px;
  min-height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center

  width: 350px;
  height: 200px;
  padding: 0px 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  list-style-type: none;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledListItem = styled.li`
  width: 200px;
  margin: 5%;
`;

const StyledSection = styled.section`
  margin: 100px 16%;
`;

const StyledImage = styled(Image)`
  margin: 15px 0px;
`;
