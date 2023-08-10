import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import List from "../../components/List";
import NavigationBar from "../../components/NavigationBar";
import PositionRadioButtons from "../../components/PositionRadioButtons";
import { StyledMain } from "../../components/StyledMain/styles";
import { StyledParagraph } from "../../components/StyledParagraph/styles";

export default function PlayersPage() {
  const [selectedPosition, setSelectedPosition] = useState("All");
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
