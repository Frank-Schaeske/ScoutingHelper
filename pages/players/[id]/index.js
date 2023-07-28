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
    <main>
      <PlayerDetails player={player} />
      <Comment player={player} />
      <div>
        <Link href={`/players/${id}/edit`}>
          <StyledLink>Edit Player</StyledLink>
        </Link>
        <button onClick={deletePlayer}>Delete Player</button>
      </div>
    </main>
  );
}

const StyledLink = styled.a`
  margin: 5% 16%;
`;
