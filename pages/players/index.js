import List from "../../components/List";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PlayersPage() {
  const { data: players, isLoading } = useSWR("/api/players", fetcher, {
    fallbackData: [],
  });

  if (isLoading) return <div>loading...</div>;

  if (players.length === 0) {
    return <div>Currently no players are saved</div>;
  }

  return (
    <>
      <StyledMain>
        <List players={players} />
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
