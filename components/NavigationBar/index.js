import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

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

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-style: solid;
  border-color: var(--primary-color);
  border-width: 2px 1px 2px 2px;
  color: lightgrey;
  height: 60px;
  width: 50%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  color: ${(props) => (props.isActive ? "black" : "lightgrey")};
`;

const StyledListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-style: solid;
  border-color: var(--primary-color);
  border-width: 2px 1px 2px 2px;
  color: lightgrey;
  height: 60px;
  width: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  color: ${(props) => (props.isActive ? "black" : "lightgrey")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
