import { useRouter } from "next/router";
import PlayerDetailsWithComment from "../../../components/PlayerDetailsWithComment";

export default function PlayerPage({ players }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <PlayerDetailsWithComment id={id} players={players} />
    </main>
  );
}
