import styled from "styled-components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function List({ players }) {
  const { data, isLoading } = useSWR("/api/players", fetcher, {
    fallbackData: [],
  });

  if (isLoading) return <div>loading...</div>;

  if (data.length === 0) {
    return <div>Currently no players are saved</div>;
  }

  return (
    <StyledList>
      {players.map((player) => {
        return (
          <li key={player.response[0].player.id}>
            {player.response[0].player.name}
          </li>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  margin: 20% 20%;
`;
