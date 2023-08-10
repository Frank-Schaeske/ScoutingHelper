import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledLink } from "../StyledLink/styles";
import {
  StyledParagraph,
  StyledList,
  StyledListItem,
  ImageContainer,
  TextContainer,
} from "./styles";

export default function Ranking({ position }) {
  const router = useRouter();
  const { isReady } = router;
  const {
    data: players,
    isLoading,
    error,
  } = useSWR("/api/players", {
    fallbackData: [],
  });

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  let rankedPlayers = "";
  const getPositionFilter = (player) =>
    player.statistics[0].games.position === position;

  const getGoalkeeperRanking = (a, b) =>
    a.statistics[0].goals.conceded - b.statistics[0].goals.conceded;

  const getDefenderRanking = (a, b) =>
    b.statistics[0].duels.won / b.statistics[0].duels.total -
    a.statistics[0].duels.won / a.statistics[0].duels.total;

  const getMidfielderAndAttackerRanking = (a, b) =>
    b.statistics[0].goals.total +
    b.statistics[0].goals.assists -
    (a.statistics[0].goals.total + a.statistics[0].goals.assists);

  if (position === "Goalkeeper") {
    rankedPlayers = players
      .filter(getPositionFilter)
      .sort(getGoalkeeperRanking);
  } else if (position === "Defender") {
    rankedPlayers = players.filter(getPositionFilter).sort(getDefenderRanking);
  } else {
    rankedPlayers = players
      .filter(getPositionFilter)
      .sort(getMidfielderAndAttackerRanking);
  }

  return (
    <StyledList>
      {rankedPlayers.map((player) => {
        return (
          <StyledLink href={`/players/${player._id}`} key={player._id}>
            <StyledListItem>
              <ImageContainer>
                <Image
                  src={player.statistics[0].team.logo}
                  height={50}
                  width={50}
                  alt={player.statistics[0].team.name}
                />
              </ImageContainer>
              <TextContainer>
                {player.player.name}
                <br />
                Season: {player.statistics[0].league.season}/
                {player.statistics[0].league.season + 1}
                <br />
                {player.statistics[0].games.position === "Goalkeeper" && (
                  <>
                    Goals conceded:{" "}
                    {player.statistics[0].goals.conceded ?? "N/A"}
                  </>
                )}
                {player?.statistics[0].games.position === "Defender" && (
                  <>
                    Duel rate:{" "}
                    {(
                      (player.statistics[0].duels.won /
                        player.statistics[0].duels.total) *
                      100
                    ).toFixed(0) + "%" ?? "N/A"}
                  </>
                )}
                {player.statistics[0].games.position !== "Goalkeeper" &&
                  player.statistics[0].games.position !== "Defender" && (
                    <>
                      Scorer points:{" "}
                      {player.statistics[0]?.goals.total +
                        player.statistics[0]?.goals.assists ?? "N/A"}
                    </>
                  )}
              </TextContainer>
            </StyledListItem>
          </StyledLink>
        );
      })}
    </StyledList>
  );
}
