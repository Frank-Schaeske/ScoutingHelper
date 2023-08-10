import useSWR from "swr";
import { useRouter } from "next/router";
import CommentForm from "../components/CommentForm";
import PlayerDetails from "../components/PlayerDetails";
import {
  StyledLinkLikeButton,
  LinkText,
} from "../components/StyledLinkLikeButton/styles";
import { StyledParagraph } from "../components/StyledParagraph/styles";
import { StyledMain } from "../components/StyledMain/styles";
import { StyledModalAdd } from "../components/StyledModal/styles";
import { LinkContainer } from "../components/LinkContainer/styles";
import { StyledOverlay } from "../components/StyledOverlay/styles";

export default function AddPage({ searchedPlayer }) {
  const router = useRouter();
  const { mutate } = useSWR("/api/players");
  const { isReady } = router;
  const {
    data: players,
    isLoading,
    error,
  } = useSWR("/api/players", {
    fallbackData: [],
  });

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPlayer = { ...searchedPlayer, ...data };

    const response = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });

    if (response.ok) {
      mutate();
    }
    router.push("/players");
  }

  if (
    searchedPlayer &&
    players.some(
      (player) =>
        player.player.name === searchedPlayer.player.name &&
        player.statistics[0].league.season ===
          searchedPlayer.statistics[0].league.season
    )
  ) {
    const searchedPlayerInDB = players.find(
      (player) =>
        player.player.name === searchedPlayer.player.name &&
        player.statistics[0].league.season ===
          searchedPlayer.statistics[0].league.season
    );

    return (
      <StyledMain>
        <PlayerDetails player={searchedPlayer} />
        <StyledModalAdd>
          <p>This player/season combination is already saved.</p>
          <LinkContainer>
            <StyledLinkLikeButton href="/">
              <LinkText>New Search</LinkText>
            </StyledLinkLikeButton>
            <StyledLinkLikeButton href={`/players/${searchedPlayerInDB._id}`}>
              <LinkText>View Player</LinkText>
            </StyledLinkLikeButton>
          </LinkContainer>
        </StyledModalAdd>
        <StyledOverlay />
      </StyledMain>
    );
  } else if (searchedPlayer) {
    return (
      <StyledMain>
        <PlayerDetails player={searchedPlayer} />
        <CommentForm
          handleSubmit={handleSubmit}
          buttonText="Save Player"
          linkText="New Search"
          linkTarget="/"
        />
      </StyledMain>
    );
  } else {
    return (
      <StyledMain>
        <PlayerDetails player={searchedPlayer} />
        <StyledLinkLikeButton href="/">
          <LinkText>New Search</LinkText>
        </StyledLinkLikeButton>
      </StyledMain>
    );
  }
}
