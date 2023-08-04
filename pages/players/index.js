import List from "../../components/List";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import useSWR from "swr";
import PositionRadioButtons from "../../components/PositionRadioButtons";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PlayersPage() {
  const [selectedPosition, setSelectedPosition] = useState("All");

  const { data: players, isLoading } = useSWR("/api/players", fetcher, {
    fallbackData: [],
  });

  if (isLoading) return <div>loading...</div>;

  let filteredPlayers = players;

  if (selectedPosition !== "All") {
    filteredPlayers = players.filter(
      (player) => player.statistics[0].games.position === selectedPosition
    );
  }

  if (players.length !== 0) {
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
  }

  return (
    <>
      <StyledMain>
        <StyledParagraph>Currently no players are saved.</StyledParagraph>
      </StyledMain>
      <NavigationBar />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 150px 16%;
`;
