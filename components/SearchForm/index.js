import styled from "styled-components";
import { useRouter } from "next/router";
import { germanTeams } from "../../lib/db";

export default function SearchForm({ setSearchedPlayer }) {
  const router = useRouter();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    addPlayer(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="search">Player last name</label>
      <input type="text" name="search" id="search" minLength="4" />
      <label htmlFor="team">Team</label>
      <select name="team" id="team">
        {germanTeams.map((germanTeam) => (
          <option key={germanTeam.teamID} value={germanTeam.teamID}>
            {germanTeam.name}
          </option>
        ))}
      </select>
      <label htmlFor="season">Season</label>
      <select name="season" id="season">
        <option value="2022">2022/23</option>
        <option value="2021">2021/22</option>
      </select>
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
