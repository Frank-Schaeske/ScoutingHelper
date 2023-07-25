import PlayerDetails from "../components/PlayerDetails";

export default function Add({ searchedPlayer }) {
  console.log("Add page:", searchedPlayer);

  return (
    <main>
      <PlayerDetails player={searchedPlayer} />
    </main>
  );
}
