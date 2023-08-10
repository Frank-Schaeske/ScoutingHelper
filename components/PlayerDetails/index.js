import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledImage,
  StyledSection,
} from "./styles";

export default function PlayerDetails({ player }) {
  if (player?.statistics?.length) {
    return (
      <StyledContainer>
        <StyledList>
          <StyledListItem>{player.player.name ?? "N/A"}</StyledListItem>
          <StyledListItem>
            {player.statistics[0].team.name ?? "N/A"}
          </StyledListItem>
          <StyledListItem>Age: {player.player.age ?? "N/A"}</StyledListItem>
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
