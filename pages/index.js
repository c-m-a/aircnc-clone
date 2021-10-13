import Head from 'next/head'
import { getSession } from 'next-auth/client'

import { useState } from 'react'

import Banner from '@components/Banner'
import Footer from '@components/Footer'
import Header from '@components/Header'
import LargeCard from '@components/LargeCard'
import Login from '@components/Login'
import MediumCard from '@components/MediumCard'
import SmallCard from '@components/SmallCard'

export default function Home({ exploreData, cardsData, session }) {
  return (
    <div>
      <Head>
        <title>Aircnc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setShowModal={setShowModal} />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            { exploreData?.map(({ img, location, distance }, idx) => (
                <SmallCard
                  key={idx}
                  img={img}
                  location={location}
                  distance={distance}
                />
            )) }
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            { cardsData?.map(({ img, title }, idx) => (
              <MediumCard
                key={idx}
                img={img}
                title={title}
              />
            )) }
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Aircnc'
          buttonText='Get inspired!'
        />
      </main>
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
