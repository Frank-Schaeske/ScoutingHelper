import PlayerDetails from "../components/PlayerDetails";

export default function Add({ searchedPlayer }) {

  return (
    <main>
      <PlayerDetails player={searchedPlayer} />
    </main>
  );
}
