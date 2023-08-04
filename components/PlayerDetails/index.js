import styled from "styled-components";
import Image from "next/image";

export default function PlayerDetails({ player }) {
  if (player) {
    return (
      <StyledContainer>
        <StyledList>
          <StyledListItem>{player.player.name ?? "N/A"}</StyledListItem>
          <StyledListItem>
            {player.statistics[0].team.name ?? "N/A"}
          </StyledListItem>
          <StyledListItem>
            Nationality: {player.player.nationality ?? "N/A"}
          </StyledListItem>
          <StyledListItem>
            Position: {player.statistics[0].games.position ?? "N/A"}
          </StyledListItem>
          <StyledListItem>
            Season: {player.statistics[0].league.season ?? "N/A"}/
            {player.statistics[0].league.season + 1 ?? "N/A"}
          </StyledListItem>
          <StyledListItem>
            Appearances: {player.statistics[0].games.appearences ?? "N/A"}
          </StyledListItem>

          {player.statistics[0].games.position === "Goalkeeper" && (
            <>
              <StyledListItem>
                Goals conceded: {player.statistics[0].goals.conceded ?? "N/A"}
              </StyledListItem>
              <StyledListItem>
                Goal saves: {player.statistics[0].goals.saves ?? "N/A"}
              </StyledListItem>
            </>
          )}

          {player?.statistics[0].games.position === "Defender" && (
            <>
              <StyledListItem>
                Duels total: {player.statistics[0].duels.total ?? "N/A"}
              </StyledListItem>
              <StyledListItem>
                Duels won: {player.statistics[0].duels.won ?? "N/A"}
              </StyledListItem>
            </>
          )}

          {player.statistics[0].games.position !== "Goalkeeper" &&
            player.statistics[0].games.position !== "Defender" && (
              <>
                <StyledListItem>
                  Goals: {player.statistics[0]?.goals.total ?? "N/A"}
                </StyledListItem>
                <StyledListItem>
                  Assists: {player.statistics[0]?.goals.assists ?? "N/A"}
                </StyledListItem>
              </>
            )}
        </StyledList>
        <StyledImage
          src={player.player.photo}
          height={80}
          width={80}
          alt={player.player.name}
        />
      </StyledContainer>
    );
  }

  return (
    <StyledSection>
      <p>No player found with this name in this team for this season.</p>
      <p>
        Please make sure not to use umlauts, e.g. Fullkrug instead of Füllkrug.
      </p>
    </StyledSection>
  );
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
