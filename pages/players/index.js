import List from "../../components/List";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import useSWR from "swr";
import PositionRadioButtons from "../../components/PositionRadioButtons";
import { useState } from "react";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PlayersPage() {
  const [selectedPosition, setSelectedPosition] = useState("All");
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

  let filteredPlayers = players;

  if (selectedPosition !== "All") {
    filteredPlayers = players.filter(
      (player) => player.statistics[0].games.position === selectedPosition
    );
  }

  if (players.length !== 0 && filteredPlayers.length) {
    return (
      <>
        <StyledMain>
          <PositionRadioButtons
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
          <List players={filteredPlayers} />
        </StyledMain>
        <NavigationBar />
      </>
    );
  } else if (players.length !== 0) {
    return (
      <>
        <StyledMain>
          <PositionRadioButtons
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
          <StyledParagraph>
            Currently there are no players saved for this position.
          </StyledParagraph>
        </StyledMain>
        <NavigationBar />
      </>
    );
  } else {
    return (
      <>
        <StyledMain>
          <StyledParagraph>Currently no players are saved.</StyledParagraph>
        </StyledMain>
        <NavigationBar />
      </>
    );
  }
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 150px 16%;
`;
