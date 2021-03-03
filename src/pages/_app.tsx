import Head from 'next/head';
import React from 'react';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home | Pomohero</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
