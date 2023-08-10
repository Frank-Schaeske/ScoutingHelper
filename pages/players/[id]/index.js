import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import PlayerDetails from "../../../components/PlayerDetails";
import Comment from "../../../components/Comment";
import {
  StyledButton,
  ButtonText,
} from "../../../components/StyledButton/styles";
import {
  StyledLinkLikeButton,
  LinkText,
} from "../../../components/StyledLinks/styles";
import { StyledParagraph } from "../../../components/StyledParagraph/styles";
import { StyledMainIdIndex } from "../../../components/StyledMains/styles";
import { Wrapper } from "../../../components/Container/Wrapper/styles";
import { StyledOverlay } from "../../../components/StyledOverlay/styles";
import { StyledModalPlayersIndex } from "../../../components/StyledModals/styles";
import { ButtonContainer } from "../../../components/Container/ButtonContainer/styles";

export default function PlayerPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const { data: player, isLoading, error } = useSWR(`/api/players/${id}`);

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  async function handleDelete() {
    setShowModal(false);
    setShowOverlay(false);
    await fetch(`/api/players/${id}`, {
      method: "DELETE",
    });
    router.push("/players");
  }

  return (
    <StyledMainIdIndex>
      <PlayerDetails player={player} />
      <Comment player={player} />
      <Wrapper>
        <StyledLinkLikeButton href={`/players/${id}/edit`}>
          <LinkText>Edit Comment</LinkText>
        </StyledLinkLikeButton>
        <StyledLinkLikeButton href={`/players/${id}/ranking`}>
          <LinkText>Compare Player</LinkText>
        </StyledLinkLikeButton>
      </Wrapper>
      <Wrapper>
        <StyledLinkLikeButton href={`/players`}>
          <LinkText>Back to List</LinkText>
        </StyledLinkLikeButton>
        <StyledButton
          onClick={() => {
            setShowModal(true);
            setShowOverlay(true);
          }}
        >
          <ButtonText>Delete Player</ButtonText>
        </StyledButton>
      </Wrapper>

      {showOverlay && <StyledOverlay />}

      {showModal && (
        <StyledModalPlayersIndex>
          <p>Are you sure you want to delete this player?</p>
          <ButtonContainer>
            <StyledButton
              onClick={() => {
                setShowModal(false);
                setShowOverlay(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </StyledButton>
            <StyledButton onClick={handleDelete}>
              <ButtonText>Delete</ButtonText>
            </StyledButton>
          </ButtonContainer>
        </StyledModalPlayersIndex>
      )}
    </StyledMainIdIndex>
  );
}
