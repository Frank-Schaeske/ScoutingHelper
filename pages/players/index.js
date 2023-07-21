import useSWR from "swr";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Players() {
  const { data } = useSWR("/api/players", fetcher, { fallbackData: [] });

  console.log(data);

  if (data.length === 0) {
    return <p>Currently no players are saved</p>;
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
  margin: 50% 20%; 
`;
