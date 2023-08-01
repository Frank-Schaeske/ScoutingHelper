import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {

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
        searchedPlayer={searchedPlayer}
        setSearchedPlayer={setSearchedPlayer}
      />
    </>
  );
}
