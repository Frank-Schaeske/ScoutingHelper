import styled from "styled-components";
import Image from "next/image";

export default function PlayerDetails({ player }) {
  if (player?.response?.length > 0) {
    if (player.response[0].statistics[0].games.position === "Goalkeeper") {
      return (
        <StyledContainer>
          <StyledList>
            <StyledListItem>{player.response[0].player.name}</StyledListItem>
            <StyledListItem>
              {player.response[0].statistics[0].team.name}
            </StyledListItem>
            <StyledListItem>
              Nationality: {player.response[0].player.nationality}
            </StyledListItem>
            <StyledListItem>
              Position: {player.response[0].statistics[0].games.position}
            </StyledListItem>
            <StyledListItem>
              Season: {player.parameters.season}/
              {parseInt(player.parameters.season, 10) + 1}
            </StyledListItem>
            <StyledListItem>
              Appearances:{" "}
              {player.response[0]?.statistics[0]?.games?.appearences ?? "N/A"}
            </StyledListItem>
            <StyledListItem>
              Goals conceded:{" "}
              {player.response[0]?.statistics[0]?.goals?.conceded ?? "N/A"}
            </StyledListItem>
            <StyledListItem>
              Goal saves:{" "}
              {player.response[0]?.statistics[0]?.goal?.saves ?? "N/A"}
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
    } else if (player.response[0].statistics[0].games.position === "Defender") {
      return (
        <StyledContainer>
          <StyledList>
            <StyledListItem>{player.response[0].player.name}</StyledListItem>
            <StyledListItem>
              {player.response[0].statistics[0].team.name}
            </StyledListItem>
            <StyledListItem>
              Nationality: {player.response[0].player.nationality}
            </StyledListItem>
            <StyledListItem>
              Position: {player.response[0].statistics[0].games.position}
            </StyledListItem>
            <StyledListItem>
              Season: {player.parameters.season}/
              {parseInt(player.parameters.season, 10) + 1}
            </StyledListItem>
            <StyledListItem>
              Appearances:{" "}
              {player.response[0]?.statistics[0]?.games?.appearences ?? "N/A"}
            </StyledListItem>
            <StyledListItem>
              Duels total:{" "}
              {player.response[0]?.statistics[0]?.duels?.total ?? "N/A"}
            </StyledListItem>
            <StyledListItem>
              Duels won:{" "}
              {player.response[0]?.statistics[0]?.duels?.won ?? "N/A"}
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
        <StyledContainer>
          <StyledList>
            <StyledListItem>{player.response[0].player.name}</StyledListItem>
            <StyledListItem>
              {player.response[0].statistics[0].team.name}
            </StyledListItem>
            <StyledListItem>
              Nationality: {player.response[0].player.nationality}
            </StyledListItem>
            <StyledListItem>
              Position: {player.response[0].statistics[0].games.position}
            </StyledListItem>
            <StyledListItem>
              Season: {player.parameters.season}/
              {parseInt(player.parameters.season, 10) + 1}
            </StyledListItem>
            <StyledListItem>
              Appearances:{" "}
              {player.response[0]?.statistics[0]?.games?.appearences ?? "N/A"}
            </StyledListItem>
            <StyledListItem>
              Goals: {player.response[0]?.statistics[0]?.goals?.total ?? "N/A"}
            </StyledListItem>
            <StyledListItem>
              Assists:{" "}
              {player.response[0]?.statistics[0]?.goals?.assists ?? "N/A"}
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
    }
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
  margin: 100px 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center

  width: 320px;
  height: 250px;
  padding: 0px 20px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.li`
  width: 200px;
  margin: 5px 0px;
  padding-left: 20px;
`;

const StyledSection = styled.section`
  margin: 100px 16%;
`;

const StyledImage = styled(Image)`
  margin: 15px 0px;
`;
