import Card from "../components/Card";

export default function Add({ searchedPlayer, player }) {
  console.log("Add:", searchedPlayer);

  return (
    <main>
      <Card player={searchedPlayer} />
    </main>
  );
}
