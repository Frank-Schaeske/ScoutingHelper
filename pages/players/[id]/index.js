import { useRouter } from "next/router";
import PlayerDetailsWithComment from "../../../components/PlayerDetailsWithComment";

export default function PlayerPage({ players }) {
  const router = useRouter();
  const { id } = router.query;

  const player = players.find(
    (player) => player.response[0].player.id === parseInt(id, 10)
  );

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <main>
      <PlayerDetailsWithComment player={player} />
    </main>
  );
}
