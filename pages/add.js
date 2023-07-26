import PlayerDetails from "../components/PlayerDetails";
import Link from "next/link";
import styled from "styled-components";

export default function Add({ searchedPlayer }) {
  return (
    <main>
      <PlayerDetails player={searchedPlayer} />
      <Link href="/">
        <StyledLink>New Search</StyledLink>
      </Link>
      <StyledButton>Save Player</StyledButton>
    </main>
  );
}

const StyledLink = styled.a`
  position: relative;
  left: 20%;
`;

const StyledButton = styled.button`
  position: relative;
  left: 30%;
`;
