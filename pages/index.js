import SearchForm from "../components/SearchForm";
import NavigationBar from "../components/NavigationBar";
import { StyledMainHome } from "../components/StyledMainHome/styles";

export default function HomePage({ setSearchedPlayer }) {
  return (
    <>
      <StyledMainHome>
        <SearchForm setSearchedPlayer={setSearchedPlayer} />
      </StyledMainHome>
      <NavigationBar />
    </>
  );
}
