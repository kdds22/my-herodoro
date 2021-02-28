import React from 'react';
import Head from 'next/head';

import { ChallengesContextProvider } from '../contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home | Pomohero</title>
      </Head>
      <ChallengesContextProvider>
        <Component {...pageProps} />
      </ChallengesContextProvider>
    </>
  )
}

export default MyApp
