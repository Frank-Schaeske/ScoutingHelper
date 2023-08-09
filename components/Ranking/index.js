import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

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

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Ranking({ position }) {
  const router = useRouter();
  const { isReady } = router;
  const {
    data: players,
    isLoading,
    error,
  } = useSWR("/api/players", fetcher, {
    fallbackData: [],
  });

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  if (position === "Goalkeeper") {
    console.log("GK");
  } else if (position === "Defender") {
    console.log("DEF");
  } else if (position === "Midfielder") {
    console.log("MF");
  } else {
    console.log("AT");
  }

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
                  alt={player.statistics[0].team.name}
                />
              </ImageContainer>
              <TextContainer>
                {player.player.name}
                <br />
                Season: {player.statistics[0].league.season}/
                {player.statistics[0].league.season + 1}
                <br />
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
  margin: 120px auto;
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

const StyledParagraph = styled.p`
  margin: 150px 16%;
`;
