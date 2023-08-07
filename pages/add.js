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
        <CommentForm handleSubmit={handleSubmit} />
        <StyledLink href="/">
          <LinkText>New Search</LinkText>
        </StyledLink>
      </StyledMain>
    );
  } else {
    return (
      <StyledMain>
        <PlayerDetails player={searchedPlayer} />
        <StyledLink href="/">
          <LinkText>New Search</LinkText>
        </StyledLink>
      </StyledMain>
    );
  }
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  --color: var(--primary-color);
  --background-color: #ffffff;

  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 2.5em;
  line-height: 3em;
  overflow: hidden;
  margin: 20px auto;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  background-color: var(--background-color);
  border: 2px solid var(--color);
  border-radius: 20px;
  position: relative;
  text-decoration: none;

  &:before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 200px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  &:hover {
    color: white;
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  &:hover::before {
    top: -30px;
    left: -30px;
  }
`;

const LinkText = styled.span`
  position: relative;
  z-index: 2;
`;
