import Card from "../components/Card";

export default function Add({ searchedPlayer, player }) {
  console.log(searchedPlayer);

  return (
    <main>
      <Card player={player} />
    </main>
  );
}
