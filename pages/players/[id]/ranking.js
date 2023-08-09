import { useRouter } from "next/router";
import { StyledLink, LinkText } from "../../../components/StyledLink";
import styled from "styled-components";
import useSWR from "swr";
import Ranking from "../../../components/Ranking";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RankingPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: player,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/players/${id}`, fetcher);

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  if (!player) {
    return <StyledParagraph>Player not found</StyledParagraph>;
  }

  const position = player.statistics[0].games.position;
  let headline = "";
  let subHeadline = "";

  if (position === "Goalkeeper") {
    headline = "Ranking of saved Goalkeepers";
    subHeadline = "by Conceded Goals";
  } else if (position === "Defender") {
    headline = "Ranking of saved Defenders";
    subHeadline = "by Duel Rate";
  } else if (position === "Midfielder") {
    headline = "Ranking of saved Midfielders";
    subHeadline = "by Scorer Points";
  } else {
    headline = "Ranking of saved Attackers";
    subHeadline = "by Scorer Points";
  }

  return (
    <StyledMain>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledSubHeadline>{subHeadline}</StyledSubHeadline>
      <Ranking position={position} />
      <StyledLink href={`/players/${id}`}>
        <LinkText>Back</LinkText>
      </StyledLink>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 150px 16%;
`;

const StyledHeadline = styled.h2`
  margin: 80px 5% 0;
`;

const StyledSubHeadline = styled.h3`
  margin: 0 16% 20px;
`;
