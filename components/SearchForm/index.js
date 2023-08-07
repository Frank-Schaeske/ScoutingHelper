import styled from "styled-components";
import { useRouter } from "next/router";
import { germanTeams } from "../../lib/db";
import { useState } from "react";

export default function SearchForm({ setSearchedPlayer }) {
  const router = useRouter();
  const [season, setSeason] = useState("2022");
  const [league, setLeague] = useState("bundesliga");

  async function addPlayer(player) {
    const response = await fetch("/api/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });

    if (!response.ok) {
      const data = await response.json();
    } else {
      const data = await response.json();
      setSearchedPlayer(data.response[0]);
      router.push("/add");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    addPlayer(data);
  }

  function handleSeasonChange(event) {
    setSeason(event.target.value);
  }

  function handleLeagueChange(event) {
    setLeague(event.target.value);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="season">Season</label>
      <select name="season" id="season" onChange={handleSeasonChange}>
        <option value="2022">2022/23</option>
        <option value="2021">2021/22</option>
        <option value="2020">2020/21</option>
      </select>
      <label htmlFor="league">League</label>
      <select name="league" id="league" onChange={handleLeagueChange}>
        <option value="bundesliga">Bundesliga</option>
        <option value="bundesliga2">2. Bundesliga</option>
      </select>
      <label htmlFor="team">Team</label>
      <select name="team" id="team">
        {germanTeams
          .filter((germanTeam) => {
            return germanTeam[season] === league;
          })
          .map((germanTeam) => (
            <option key={germanTeam.teamID} value={germanTeam.teamID}>
              {germanTeam.name}
            </option>
          ))}
      </select>
      <label htmlFor="search">Player last name</label>
      <input type="text" name="search" id="search" minLength="4" />
      <button type="submit">Search Player</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 200px;
  margin: 100px;
`;
