import { useRouter } from "next/router";
import { StyledLink, LinkText } from "../../../components/StyledLink";
import styled from "styled-components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage() {
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

  console.log(player);

  return (
    <StyledMain>
      <StyledHeadline>Description</StyledHeadline>
      <StyledLink href={`/players/${id}`}>Back</StyledLink>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledHeadline = styled.h2`
  margin: 80px 16%;
`;
