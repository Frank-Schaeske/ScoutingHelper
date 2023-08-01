import List from "../../components/List";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import useSWR from "swr";

export default function Players() {
  const { data } = useSWR("/api/players", { fallbackData: [] });
  console.log(data);

  return (
    <>
      <StyledMain>
        <List players={data} />
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
