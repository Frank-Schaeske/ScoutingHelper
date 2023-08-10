import { StyledHeader, StyledHeadline } from "./styles";
import { StyledLink } from "../StyledLink/styles";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLink href={`/`}>
        <StyledHeadline>ScoutingHelper</StyledHeadline>
      </StyledLink>
    </StyledHeader>
  );
}
