import PlayerDetails from "../components/PlayerDetails";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import CommentForm from "../components/CommentForm";

export default function Add({ searchedPlayer, players, setPlayers }) {
  const router = useRouter();

  function handleSave(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPlayer = { ...searchedPlayer, ...data };

    setPlayers([...players, newPlayer]);
    router.push("/players");
  }

  if (searchedPlayer?.response?.length > 0) {
    return (
      <main>
        <PlayerDetails player={searchedPlayer} />
        <CommentForm handleSave={handleSave} />
        <Link href="/">
          <StyledLink>New Search</StyledLink>
        </Link>
      </main>
    );
  } else {
    return (
      <main>
        <PlayerDetails player={searchedPlayer} />
        <Link href="/">
          <StyledLink>New Search</StyledLink>
        </Link>
      </main>
    );
  }
}

const StyledLink = styled.a`
  position: relative;
  left: 20%;
`;

const StyledButton = styled.button`
  position: relative;
  left: 30%;
`;
