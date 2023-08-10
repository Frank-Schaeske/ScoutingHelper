import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { StyledLink } from "../StyledLinks/styles";
import { StyledSearchContainer, StyledListContainer } from "./styles";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <>
      <StyledLink href={`/`}>
        <StyledSearchContainer isActive={router.pathname === "/"}>
          <BsSearch size={30} />
        </StyledSearchContainer>
      </StyledLink>
      <StyledLink href={`players`}>
        <StyledListContainer isActive={router.pathname === "/players"}>
          <CiBoxList size={30} />
        </StyledListContainer>
      </StyledLink>
    </>
  );
}
