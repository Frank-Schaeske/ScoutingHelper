import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function List({players}) {

  return (
    <StyledList>
      {players.map((player) => {
        return (
          <Link
            href={`/players/${player._id}`}
            key={player._id}
          >
            <StyledListItem>
              <Image
                src={player.response[0].statistics[0].team.logo}
                height={50}
                width={50}
                alt={player.response[0].player.name}
              />
              {player.response[0].player.firstname}
              <br />
              {player.response[0].player.lastname}
            </StyledListItem>
          </Link>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  margin: 100px 16%;
  padding: 0% 0%;
`;

const StyledListItem = styled.li`
  max-width: 400px;
  min-height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 200px;
  height: 65px;
  padding: 5px 5px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin: 5% 5%;
`;
