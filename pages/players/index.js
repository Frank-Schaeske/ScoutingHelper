import List from "../../components/List";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";

export default function Players({ players }) {
  return (
    <>
      <StyledMain>
        <List players={players} />
      </StyledMain>
      <NavigationBar />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
