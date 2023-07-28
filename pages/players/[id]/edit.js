import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import CommentForm from "../../../components/CommentForm";

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

    console.log("id:", id);
    console.log("players:", players);
    console.log("playerIndex:", playerIndex);

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

    console.log("id:", id);
    console.log("data.comment:", data.comment);

    handleChangeComment(id, data.comment);

    router.push("/players");
  }

  return (
    <main>
      {" "}
      <PlayerDetails player={player} />
      <CommentForm handleSubmit={handleEdit} buttonText="Update Player" />
    </main>
  );
}
