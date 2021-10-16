import Head from 'next/head'
import { getSession } from 'next-auth/client'

import { useState } from 'react'

import Banner from '@components/Banner'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Main from '@components/Main'

export default function Home({ exploreData, cardsData, session }) {
  return (
    <div>
      <Head>
        <title>Aircnc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Main exploreData={exploreData} cardsData={cardsData} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context)

  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json())

  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json())

  return {
    props: { exploreData, cardsData, session }
  }
}
