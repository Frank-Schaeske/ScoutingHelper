//import Heading from "../components/Heading";
//import SubHeading from "../components/SubHeading";
import Form from "../components/Form";

export default function Home({ setSearchedPlayer }) {
  return (
    <main>
      <Form setSearchedPlayer={setSearchedPlayer} />
    </main>
  );
}
