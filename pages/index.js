//import Heading from "../components/Heading";
//import SubHeading from "../components/SubHeading";
import styled from "styled-components";
import { initialPlayers } from "../lib/db";
import { useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState(initialPlayers);

  function handleNewPlayer(data) {
    console.log("Data:", data);
    setPlayers([...players, data]);
    console.log("Players:", players);
  }

  return (
    <main>
      <Form onNewPlayer={handleNewPlayer} />
    </main>
  );
}

function Form({ onNewPlayer }) {
  function handleSubmit(event) {
    event.preventDefault();

    const search = event.target.elements.search.value;
    const season = event.target.elements.season.value;
    const team = event.target.elements.team.value;
    const data = {
      get: "players",
      parameters: { team: "163", search: "thuram", season: "2022" },
      errors: [],
      results: 1,
      paging: { current: 1, total: 1 },
      response: [
        {
          player: {
            id: 21509,
            name: "M. Thuram",
            firstname: "Marcus Lilian",
            lastname: "Thuram-Ulien",
          },
          statistics: [
            {
              team: { id: 163, name: "Borussia Monchengladbach" },
              goals: { total: 13 },
            },
          ],
        },
      ],
    };

    onNewPlayer(data);

    event.target.reset();
    event.target.search.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Player name</label>
      <input type="text" name="search" id="search" />
      <label htmlFor="team">Team</label>
      <select name="team" id="team">
        <option value="167">1899 Hoffenheim</option>
        <option value="188">Arminia Bielefeld</option>
        <option value="168">Bayer Leverkusen</option>
        <option value="157">Bayern Munich</option>
        <option value="165">Borussia Dortmund</option>
        <option value="163">Borussia Monchengladbach</option>
        <option value="169">Eintracht Frankfurt</option>
        <option value="170">FC Augsburg</option>
        <option value="192">FC Koln</option>
        <option value="174">FC Schalke 04</option>
        <option value="164">FSV Mainz 05</option>
        <option value="159">Hertha Berlin</option>
        <option value="173">RB Leipzig</option>
        <option value="160">SC Freiburg</option>
        <option value="178">SpVgg Greuther Furth</option>
        <option value="182">Union Berlin</option>
        <option value="172">VfB Stuttgart</option>
        <option value="176">VfL BOCHUM</option>
        <option value="161">VfL Wolfsburg</option>
        <option value="162">Werder Bremen</option>
      </select>
      <label htmlFor="season">Season</label>
      <select name="season" id="season">
        <option value="2022">2022/23</option>
        <option value="2021">2021/22</option>
      </select>
      <button type="submit">Create Player</button>
    </form>
  );
}

/*const StyledForm = styled.form`
  margin: 20% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
`;*/
