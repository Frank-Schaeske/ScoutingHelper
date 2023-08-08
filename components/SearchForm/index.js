import styled from "styled-components";
import { useRouter } from "next/router";
import { germanTeams } from "../../lib/db";
import { useState } from "react";
import { StyledButton, ButtonText } from "../StyledButton";

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
      <div>
        <StyledLabel htmlFor="season">Season:</StyledLabel>
        <StyledSelect name="season" id="season" onChange={handleSeasonChange}>
          <option value="2022">2022/23</option>
          <option value="2021">2021/22</option>
          <option value="2020">2020/21</option>
        </StyledSelect>
      </div>
      <div>
        <StyledLabel htmlFor="league">League:</StyledLabel>
        <StyledSelect name="league" id="league" onChange={handleLeagueChange}>
          <option value="bundesliga">Bundesliga</option>
          <option value="bundesliga2">2. Bundesliga</option>
        </StyledSelect>
      </div>
      <div>
        <StyledLabel htmlFor="team">Team:</StyledLabel>
        <StyledSelect name="team" id="team">
          {germanTeams
            .filter((germanTeam) => {
              return germanTeam[season] === league;
            })
            .map((germanTeam) => (
              <option key={germanTeam.teamID} value={germanTeam.teamID}>
                {germanTeam.name}
              </option>
            ))}
        </StyledSelect>
      </div>
      <div>
        <StyledLabel htmlFor="search">Player last name:</StyledLabel>
        <StyledInput type="text" name="search" id="search" minLength="4" />
      </div>
      <StyledContainer>
        <StyledButton>
          <ButtonText>Search Player</ButtonText>
        </StyledButton>
      </StyledContainer>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  margin: 100px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled.select`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  padding-left: 10px;
  margin: 5px 20px 20px;
  width: 200px;
  font-family: system-ui;
  font-size: 16px;
`;

const StyledInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  padding-left: 10px;
  margin: 5px 20px 50px;
  width: 200px;
  height: 22px;
  font-family: system-ui;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  padding-left: 30px;
`;
