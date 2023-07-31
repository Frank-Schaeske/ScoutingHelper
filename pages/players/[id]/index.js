import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import Comment from "../../../components/Comment";
import Link from "next/link";
import styled from "styled-components";

export default function PlayerPage({ players, setPlayers }) {
  const router = useRouter();
  const { id } = router.query;

  const player = players.find(
    (player) => player.response[0].player.id === parseInt(id, 10)
  );

  if (!player) {
    return <div>Player not found</div>;
  }

  function deletePlayer() {
    setPlayers(
      players.filter(
        (player) => player.response[0].player.id !== parseInt(id, 10)
      )
    );
    router.push("/players");
  }

  return (
    <StyledMain>
      <PlayerDetails player={player} />
      <Comment player={player} />
      <Link href={`/players/${id}/edit`}>
        <button>Edit Comment</button>
      </Link>
      <button onClick={deletePlayer}>Delete Player</button>
      <Link href={`/players`}>
        <button>Back</button>
      </Link>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
