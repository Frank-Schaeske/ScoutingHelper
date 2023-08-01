import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import Comment from "../../../components/Comment";
import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function PlayerPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: player, isLoading, error } = useSWR(`/api/players/${id}`, fetcher);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function handleDelete() {
  await fetch(`/api/players/${id}`, {
  method: "DELETE",
  });
  router.push("/players");
}

  return (
    <StyledMain>
      <PlayerDetails player={player} />
      <Comment player={player} />
      <Link href={`/players/${id}/edit`}>
        <button>Edit Comment</button>
      </Link>
      <button onClick={handleDelete}>Delete Player</button>
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
  gap: 10px;
`;