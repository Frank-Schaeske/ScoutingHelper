import styled from "styled-components";
import useSWR from "swr";
import Link from "next/link";

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
            <Link href={`/players/${player.response[0].player.id}`}>
              {player.response[0].player.name}
            </Link>
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
