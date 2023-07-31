//import Heading from "../components/Heading";
//import SubHeading from "../components/SubHeading";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Home({ setSearchedPlayer }) {
  return (
    <>
      <StyledMain>
        <SearchForm setSearchedPlayer={setSearchedPlayer} />
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;
