import { useRouter } from "next/router";
import PlayerDetailsWithComment from "../../../components/PlayerDetailsWithComment";
import CommentForm from "../../../components/CommentForm";

export default function PlayerPage({ players }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <PlayerDetailsWithComment id={id} players={players} />
    </main>
  );
}
