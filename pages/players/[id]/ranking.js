import { useRouter } from "next/router";
import { StyledLink, LinkText } from "../../../components/StyledLink";
import styled from "styled-components";
import useSWR from "swr";
import Ranking from "../../../components/Ranking";

export default function RankingPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: player,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/players/${id}`);

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  if (!player) {
    return <StyledParagraph>Player not found</StyledParagraph>;
  }

  const position = player.statistics[0].games.position;
  let headline = "";
  let subHeadline = "";

  if (position === "Goalkeeper") {
    headline = "Ranking of goalkeepers";
    subHeadline = "by conceded goals";
  } else if (position === "Defender") {
    headline = "Ranking of defenders";
    subHeadline = "by duel rate";
  } else if (position === "Midfielder") {
    headline = "Ranking of midfielders";
    subHeadline = "by scorer points";
  } else {
    headline = "Ranking of attackers";
    subHeadline = "by scorer points";
  }

  return (
    <StyledMain>
      <HeadlineContainer>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledSubHeadline>{subHeadline}</StyledSubHeadline>
      </HeadlineContainer>
      <Ranking position={position} />
      <LinkContainer>
        <StyledLink href={`/players/${id}`}>
          <LinkText>Back</LinkText>
        </StyledLink>
      </LinkContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin-top: 150px;
  text-align: center;
`;

const StyledHeadline = styled.h2`
  margin: 5px;
  color: var(--primary-color);
`;

const StyledSubHeadline = styled.h3`
  margin: 0;
  color: var(--primary-color);
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  background-color: white;
`;
