import { useRouter } from "next/router";
import useSWR from "swr";
import {
  StyledLinkLikeButton,
  LinkText,
} from "../../../components/StyledLinkLikeButton/styles";
import Ranking from "../../../components/Ranking";
import {
  StyledMain,
  StyledParagraph,
  HeadlineContainer,
  StyledHeadline,
  StyledSubHeadline,
  LinkContainer,
} from "./styles";

export default function RankingPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: player, isLoading, error } = useSWR(`/api/players/${id}`);

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
        <StyledLinkLikeButton href={`/players/${id}`}>
          <LinkText>Back</LinkText>
        </StyledLinkLikeButton>
      </LinkContainer>
    </StyledMain>
  );
}
