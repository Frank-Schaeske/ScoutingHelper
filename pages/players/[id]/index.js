import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import Comment from "../../../components/Comment";
import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";

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
      <Link href={`/players/${id}/edit`}>Edit Comment</Link>
      <button
        onClick={() => {
          setShowModal(true);
          setShowOverlay(true);
        }}
      >
        Delete Player
      </button>
      <Link href={`/players`}>Back</Link>

      {showOverlay && <StyledOverlay />}

      {showModal && (
        <StyledModal>
          <p>Are you sure you want to delete this player?</p>
          <ButtonContainer>
            <button onClick={handleDelete}>Delete</button>
            <button
              onClick={() => {
                setShowModal(false);
                setShowOverlay(false);
              }}
            >
              Cancel
            </button>
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
  gap: 60px;

  button {
    margin-top: 10px;
  }
`;
