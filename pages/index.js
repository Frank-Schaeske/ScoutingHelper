//import Heading from "../components/Heading";
//import SubHeading from "../components/SubHeading";
import SearchForm from "../components/SearchForm";

export default function Home({ setSearchedPlayer }) {
  return (
    <main>
      <SearchForm setSearchedPlayer={setSearchedPlayer} />
    </main>
  );
}
