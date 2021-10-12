import { useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import RoomOpts from '../components/RoomOpts'

export default function BecomeAHost() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header setShowModal={setShowModal} />
      <main className='py-14 px-16'>
        <section>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Start a new listing</h1>
          <RoomOpts />
        </section>
      </main>
      <Footer />
    </>
  )
}

