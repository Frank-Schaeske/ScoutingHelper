import useSWR from "swr";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Players() {
  const { data, isLoading } = useSWR("/api/players", fetcher, {
    fallbackData: [],
  });

  if (isLoading) return <div>loading...</div>;

  if (data.length === 0) {
    return <div>Currently no players are saved</div>;
  }

  return (
    <StyledList>
      {data.map((player) => {
        return (
          <li key={player.response[0].player.id}>
            {player.response[0].player.firstname}{" "}
            {player.response[0].player.lastname}
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
