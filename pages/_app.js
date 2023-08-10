import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [searchedPlayer, setSearchedPlayer] = useState({});

  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 1000,
      }}
    >
      <GlobalStyle />
      <Head>
        <title>ScoutingHelper</title>
      </Head>
      <Header />
      <Component
        {...pageProps}
        searchedPlayer={searchedPlayer}
        setSearchedPlayer={setSearchedPlayer}
      />
    </SWRConfig>
  );
}
