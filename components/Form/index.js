import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Form({ setSearchedPlayer }) {
  const router = useRouter();

  async function HandleSubmit(event) {
    event.preventDefault();

    const search = event.target.elements.search.value;
    const season = event.target.elements.season.value;
    const team = event.target.elements.team.value;

    console.log(search, season, team);

    const rapidApiKey = process.env.RAPID_API_KEY;

    const url = `https://api-football-v1.p.rapidapi.com/v3/players?team=${team}&season=${season}&search=${search}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchedPlayer(result);
      router.push("/add");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledForm onSubmit={HandleSubmit}>
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
  margin: 20% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
`;
