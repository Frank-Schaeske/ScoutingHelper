import GlobalStyle from "../styles";
import Head from "next/head";
import { initialPlayers } from "../lib/db";
import { useState } from "react";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {

  const [players, setPlayers] = useState(initialPlayers);
  const [searchedPlayer, setSearchedPlayer] = useState({});

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>ScoutingHelper</title>
      </Head>
      <Header/>
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
