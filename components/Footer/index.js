import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer({ page }) {
  const router = useRouter();

  return (
    <>
      <StyledSearchContainer>
        <StyledLink href={`/`} isActive={page === "search"}>
          Link
        </StyledLink>
      </StyledSearchContainer>
      <StyledListContainer>
        <StyledLink href={`players`} isActive={page === "list"}>
          Link
        </StyledLink>
      </StyledListContainer>
    </>
  );
}

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-style: solid;
  border-color: #009900;
  border-width: 2px 1px 2px 2px;
  color: lightgrey;
  height: 80px;
  width: 50%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-style: solid;
  border-color: #009900;
  border-width: 2px 1px 2px 2px;
  color: lightgrey;
  height: 80px;
  width: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "black" : "inherit")};
  cursor: default;
`;
