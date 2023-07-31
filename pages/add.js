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
      <StyledMain>

          <PlayerDetails player={searchedPlayer} />
          <CommentForm handleSubmit={handleSave} buttonText="Save Player" />
          <Link href="/">
            <StyledButton href="/">New Search</StyledButton>
          </Link>
      </StyledMain>
    );
  } else {
    return (
      <StyledMain>
        <div>
          <PlayerDetails player={searchedPlayer} />
          <Link href="/">
            <StyledButton>New Search</StyledButton>
          </Link>
        </div>
      </StyledMain>
    );
  }
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin: 10px 16%;
`;
