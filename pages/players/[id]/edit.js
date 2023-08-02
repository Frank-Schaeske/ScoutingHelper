import { useRouter } from "next/router";
import PlayerDetails from "../../../components/PlayerDetails";
import CommentForm from "../../../components/CommentForm";
import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: player,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/players/${id}`, fetcher);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  if (!player) {
    return <div>Player not found</div>;
  }

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(`/api/players/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate();
    }

    router.push("/players");
  }

  return (
    <StyledMain>
      {" "}
      <PlayerDetails player={player} />
      <CommentForm
        handleSubmit={handleEdit}
        buttonText="Update Comment"
        defaultData={player}
      />
      <Link href={`/players/${id}`}>
        <button>Cancel</button>
      </Link>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
