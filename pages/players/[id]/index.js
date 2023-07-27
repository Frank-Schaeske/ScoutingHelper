import { useRouter } from "next/router";
import PlayerDetailsWithComment from "../../../components/PlayerDetailsWithComment";

export default function PlayerPage({ player }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      {/*<PlayerDetailsWithComment player={player} />*/}
      <p>ID: {id}</p>
    </main>
  );
}
