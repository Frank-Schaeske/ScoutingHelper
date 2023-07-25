import Card from "../components/Card";

export default function Add({ searchedPlayer }) {
  console.log("Add page:", searchedPlayer);

  return (
    <main>
      <Card player={searchedPlayer} />
    </main>
  );
}
