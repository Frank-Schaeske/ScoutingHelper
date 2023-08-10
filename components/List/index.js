import Image from "next/image";
import {
  StyledList,
  StyledListItem,
  ImageContainer,
  TextContainer,
} from "./styles";
import { StyledLink } from "../StyledLink/styles";

function comparePlayers(a, b) {
  const nameA = a.player.lastname.toLowerCase();
  const nameB = b.player.lastname.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export default function List({ players }) {
  return (
    <StyledList>
      {players.sort(comparePlayers).map((player) => {
        return (
          <StyledLink href={`/players/${player._id}`} key={player._id}>
            <StyledListItem>
              <ImageContainer>
                <Image
                  src={player.statistics[0].team.logo}
                  height={50}
                  width={50}
                  alt={player.statistics[0].team.name}
                />
              </ImageContainer>
              <TextContainer>
                {player.player.name}
                <br />
                Season: {player.statistics[0].league.season}/
                {player.statistics[0].league.season + 1}
              </TextContainer>
            </StyledListItem>
          </StyledLink>
        );
      })}
    </StyledList>
  );
}
