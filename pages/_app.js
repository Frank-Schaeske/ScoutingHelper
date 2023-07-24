import GlobalStyle from "../styles";
import Head from "next/head";
import { initialPlayers } from "../lib/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [players, setPlayers] = useState(initialPlayers);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} players={players} setPlayers={setPlayers} />
    </>
  );
}
