import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import firebase, { db } from '../../../firebase'
import { doc, getDoc } from 'firebase/firestore'

import Footer from '@components/Footer'
import Header from '@components/Header'
import EditRoomOpts from '@components/EditRoomOpts'
import SideBar from '@components/SideBar'

import {
  FORM_OPTS,
  FORM_PRICING,
  FORM_DESCRIPTION,
  FORM_PHOTOS,
  FORM_AMENITIES,
  FORM_LOCATION
} from '@root/constants'


export default function Listing() {
  const router = useRouter()
  const roomId = router.query.pid
  const [form, setForm] = useState(FORM_OPTS)
  const [room, setRoom] = useState({})

  useEffect(async () => {
    if (roomId === undefined) return false;

    const roomRef = doc(db, 'rooms', roomId)
    const roomSnap = await getDoc(roomRef)
    setRoom(roomSnap.data())
  }, [roomId])

  return (
    <>
      <Header />
      <main className='my-5 py-14 px-16'>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Your listing</h1>
        <section className='flex'>
          <SideBar
            room={room}
            setRoom={setRoom}
            setForm={setForm}
          />
          { form === FORM_OPTS &&
            <EditRoomOpts
              room={room}
              setRoom={setRoom}
              setForm={setForm}
            />
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
