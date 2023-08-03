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

  if (players.length === 0) {
    return <div>Currently no players are saved</div>;
  }

  let filteredPlayers = players;

  if (selectedPosition !== "All") {
    filteredPlayers = players.filter(
      (player) =>
        player.response[0].statistics[0].games.position === selectedPosition
    );
  }

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

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
