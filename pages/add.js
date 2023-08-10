import PlayerDetails from "../components/PlayerDetails";
import styled from "styled-components";
import { useRouter } from "next/router";
import CommentForm from "../components/CommentForm";
import useSWR from "swr";
import {
  StyledLinkLikeButton,
  LinkText,
} from "../components/StyledLinkLikeButton";

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
        <StyledModal>
          <p>This player/season combination is already saved.</p>
          <LinkContainer>
            <StyledLinkLikeButton href="/">
              <LinkText>New Search</LinkText>
            </StyledLinkLikeButton>
            <StyledLinkLikeButton href={`/players/${searchedPlayerInDB._id}`}>
              <LinkText>View Player</LinkText>
            </StyledLinkLikeButton>
          </LinkContainer>
        </StyledModal>
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

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin-top: 150px;
  text-align: center;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 70%;
  left: 50%;
  width: 300px;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    margin-top: 10px;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;
