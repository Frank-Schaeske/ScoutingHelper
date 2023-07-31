import List from "../../components/List";
import Footer from "../../components/Footer";
import styled from "styled-components";

export default function Players({ players }) {
  return (
    <>
      <StyledMain>
        <List players={players} />
      </StyledMain>
      <Footer page="list" />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
