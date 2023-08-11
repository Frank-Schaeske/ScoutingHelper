import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;

  :link {
    color: var(--tertiary-color);
  }

  :visited {
    color: var(--tertiary-color);
  }

  :active {
    color: var(--tertiary-color);
  }

  :hover {
    color: var(--primary-color);
  }
`;

export const StyledLinkLikeButton = styled(Link)`
  --color: var(--primary-color);
  --background-color: var(--secondary-color);

  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 2.5em;
  line-height: 3em;
  overflow: hidden;
  margin: 0 auto;
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

export const LinkText = styled.span`
  position: relative;
  z-index: 2;
`;
