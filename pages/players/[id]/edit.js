import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import CommentForm from "../../../components/CommentForm";
import Link from "next/link";
import styled from "styled-components";

export default function EditPage({ players, setPlayers }) {
  const router = useRouter();
  const { id } = router.query;

  const player = players.find(
    (player) => player.response[0].player.id === parseInt(id, 10)
  );

  if (!player) {
    return <div>Player not found</div>;
  }

  function handleChangeComment(id, newComment) {
    const playerIndex = players.findIndex(
      (player) => player.response[0].player.id === parseInt(id, 10)
    );

    if (playerIndex !== -1) {
      const updatedPlayers = [...players];

      updatedPlayers[playerIndex] = {
        ...updatedPlayers[playerIndex],
        comment: newComment,
      };

      setPlayers(updatedPlayers);
    }
  }

  function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleChangeComment(id, data.comment);

    router.push("/players");
  }

  return (
    <main>
      {" "}
      <PlayerDetails player={player} />
      <CommentForm
        handleSubmit={handleEdit}
        buttonText="Update Player"
        defaultData={player}
      />
      <Link href={`/players/${id}`}>
        <StyledButton>Cancel</StyledButton>
      </Link>
    </main>
  );
}

const StyledButton = styled.button`
  margin: 5% 16%;
`;
