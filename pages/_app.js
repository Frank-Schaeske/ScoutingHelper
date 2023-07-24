import GlobalStyle from "../styles";
import Head from "next/head";
import { initialPlayers } from "../lib/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const dummyPlayer = {
    get: "players",
    parameters: { team: 163, search: "Marcus Thuram", season: 2022 },
    errors: [],
    results: 1,
    paging: { current: 1, total: 1 },
    response: [
      {
        player: {
          id: 21509,
          name: "Marcus Thuram",
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

  const [players, setPlayers] = useState(initialPlayers);
  const [searchedPlayer, setSearchedPlayer] = useState(dummyPlayer);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        players={players}
        setPlayers={setPlayers}
        searchedPlayer={searchedPlayer}
        setSearchedPlayer={setSearchedPlayer}
      />
    </>
  );
}
