import PlayerDetails from "../components/PlayerDetails";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Add({ searchedPlayer, players, setPlayers }) {
  const router = useRouter();

  function handleSave() {
    setPlayers([...players, searchedPlayer]);
    router.push("/players");
  }

  if (searchedPlayer?.response?.length > 0) {
    return (
      <main>
        <PlayerDetails player={searchedPlayer} />
        <Link href="/">
          <StyledLink>New Search</StyledLink>
        </Link>
        <StyledButton onClick={handleSave}>Save Player</StyledButton>
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
