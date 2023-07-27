import styled from "styled-components";

export default function PlayerDetailsWithComment({player}) {

  
  return (
    <>
      <StyledSection>
        <p>
          Name: {player.response[0].player.name}
          <br />
          Team: {player.response[0].statistics[0].team.name}
          <br />
          Season: {player.parameters.season}/
          {parseInt(player.parameters.season, 10) + 1}
          <br />
          Goals: {player.response[0].statistics[0].goals.total}
          <br />
          <br />
          Comment: {player.comment}
        </p>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  position: fixed;
  top: 10%;
  left: 20%;
`;
