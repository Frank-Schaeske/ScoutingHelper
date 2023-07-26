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
    </main>
  );
}

const StyledLink = styled.a`
  margin: 20% 20%;
`;
