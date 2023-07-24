//import Heading from "../components/Heading";
//import SubHeading from "../components/SubHeading";
import Form from "../components/Form";

export default function Home({ players, setPlayers }) {
  return (
    <main>
      <Form players={players} setPlayers={setPlayers} />
    </main>
  );
}
