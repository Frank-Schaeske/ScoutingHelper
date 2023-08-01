//import Heading from "../components/Heading";
//import SubHeading from "../components/SubHeading";
import SearchForm from "../components/SearchForm";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";

export default function HomePage({ setSearchedPlayer }) {
  return (
    <>
      <StyledMain>
        <SearchForm setSearchedPlayer={setSearchedPlayer} />
      </StyledMain>
      <NavigationBar />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;
