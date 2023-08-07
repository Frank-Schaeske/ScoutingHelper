import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function List({ players }) {
    return (
      <StyledList>
        {players.map((player) => {
          return (
            <Link href={`/players/${player._id}`} key={player._id}>
              <StyledListItem>
                <ImageContainer>
                  <Image
                    src={player.statistics[0].team.logo}
                    height={50}
                    width={50}
                    alt={player.player.name}
                  />
                </ImageContainer>
                <TextContainer>
                  {player.player.name}
                  <br />
                  Season: {player.statistics[0].league.season}/
                  {player.statistics[0].league.season + 1}
                </TextContainer>
              </StyledListItem>
            </Link>
          );
        })}
      </StyledList>
    );
  }

const StyledList = styled.ul`
  list-style-type: none;
  margin: 130px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledListItem = styled.li`
  max-width: 400px;
  min-height: 65px;
  display: flex;
  align-items: center;
  padding: 5px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  padding-right: 5px;
`;

const TextContainer = styled.div`
  padding: 5px;
`;