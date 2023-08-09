import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Ranking({ position }) {
  const router = useRouter();
  const { isReady } = router;
  const {
    data: players,
    isLoading,
    error,
  } = useSWR("/api/players", fetcher, {
    fallbackData: [],
  });

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  let rankedPlayers = "";

  if (position === "Goalkeeper") {
    rankedPlayers = players
      .filter((player) => player.statistics[0].games.position === "Goalkeeper")
      .sort(
        (a, b) =>
          a.statistics[0].goals.conceded - b.statistics[0].goals.conceded
      );
  } else if (position === "Defender") {
    rankedPlayers = players
      .filter((player) => player.statistics[0].games.position === "Defender")
      .sort(
        (a, b) =>
          b.statistics[0].duels.won / b.statistics[0].duels.total -
          a.statistics[0].duels.won / a.statistics[0].duels.total
      );
  } else if (position === "Midfielder") {
    rankedPlayers = players
      .filter((player) => player.statistics[0].games.position === "Midfielder")
      .sort(
        (a, b) =>
          b.statistics[0]?.goals.total +
          b.statistics[0]?.goals.assists -
          (a.statistics[0]?.goals.total + a.statistics[0]?.goals.assists)
      );
  } else {
    rankedPlayers = players
      .filter((player) => player.statistics[0].games.position === "Attacker")
      .sort(
        (a, b) =>
          b.statistics[0]?.goals.total +
          b.statistics[0]?.goals.assists -
          (a.statistics[0]?.goals.total + a.statistics[0]?.goals.assists)
      );
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

const StyledList = styled.ul`
  list-style-type: none;
  margin: 130px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledListItem = styled.li`
  max-width: 400px;
  min-height: 65px;
  display: flex;
  align-items: center;
  padding: 5px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  padding-right: 5px;
`;

const TextContainer = styled.div`
  padding: 5px;
`;

const StyledParagraph = styled.p`
  margin: 150px 16%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
