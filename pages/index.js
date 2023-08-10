import SearchForm from "../components/SearchForm";
import NavigationBar from "../components/NavigationBar";
import { StyledMain } from "../components/StyledMains/styles";

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
