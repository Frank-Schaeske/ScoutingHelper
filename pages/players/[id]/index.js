import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import Comment from "../../../components/Comment";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";
import { StyledButton, ButtonText } from "../../../components/StyledButton";
import { StyledLink, LinkText } from "../../../components/StyledLink";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PlayerPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const {
    data: player,
    isLoading,
    error,
  } = useSWR(`/api/players/${id}`, fetcher);

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
    <StyledMain>
      <PlayerDetails player={player} />
      <Comment player={player} />
      <Wrapper>
        <StyledLink href={`/players/${id}/edit`}>
          <LinkText>Edit Comment</LinkText>
        </StyledLink>
        <StyledLink href={`/players/${id}/ranking`}>
          <LinkText>Compare Player</LinkText>
        </StyledLink>
      </Wrapper>
      <Wrapper>
        <StyledLink href={`/players`}>Back to List</StyledLink>
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
        <StyledModal>
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
        </StyledModal>
      )}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const StyledParagraph = styled.p`
  margin: 150px 16%;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
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

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    margin-top: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px;
`;
