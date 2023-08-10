import { useRouter } from "next/router";
import useSWR from "swr";
import PlayerDetails from "../../../components/PlayerDetails";
import CommentForm from "../../../components/CommentForm";
import { StyledMain, StyledParagraph } from "../styles";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: player,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/players/${id}`);

  if (!isReady || isLoading || error)
    return <StyledParagraph>Loading...</StyledParagraph>;

  if (!player) {
    return <StyledParagraph>Player not found</StyledParagraph>;
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
        defaultData={player}
        buttonText="Save Comment"
        linkText="Back"
        linkTarget={`/players/${id}`}
      />
    </StyledMain>
  );
}
