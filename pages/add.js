import PlayerDetails from "../components/PlayerDetails";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import CommentForm from "../components/CommentForm";
import useSWR from "swr";

export default function AddPage({ searchedPlayer }) {
  const router = useRouter();
  const { mutate } = useSWR("/api/players");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPlayer = { ...searchedPlayer, ...data };

    const response = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });

    if (response.ok) {
      mutate();
    }
    router.push("/players");
  }

  if (searchedPlayer) {
    return (
      <StyledMain>
        <PlayerDetails player={searchedPlayer} />
        <CommentForm handleSubmit={handleSubmit} buttonText="Save Player" />
        <Link href="/">New Search</Link>
      </StyledMain>
    );
  } else {
    return (
      <StyledMain>
        <PlayerDetails player={searchedPlayer} />
        <Link href="/">New Search</Link>
      </StyledMain>
    );
  }
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
