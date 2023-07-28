import List from "../../components/List";

export default function Players({ players }) {
  console.log(players);
  return <List players={players} />;
}
