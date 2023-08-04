import styled from "styled-components";
import { useRouter } from "next/router";

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
