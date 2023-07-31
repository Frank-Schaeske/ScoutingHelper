import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLink href={`/`}>
        <StyledHeadline>ScoutingHelper</StyledHeadline>
      </StyledLink>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #009900;
  color: #ffffff;
  height: 80px;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledHeadline = styled.h1`
  color: #ffffff;
  text-decoration: none;
`;
