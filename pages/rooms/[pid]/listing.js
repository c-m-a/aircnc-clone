import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import firebase, { db } from '../../../firebase'
import { doc, getDoc } from 'firebase/firestore'

import Amenities from '@components/Amenities'
import Description from '@components/Description'
import EditRoomOpts from '@components/EditRoomOpts'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Location from '@components/Location'
import Photos from '@components/Photos'
import Pricing from '@components/Pricing'
import SideBar from '@components/SideBar'

import {
  FORM_LISTING,
  FORM_PRICING,
  FORM_DESCRIPTION,
  FORM_PHOTOS,
  FORM_AMENITIES,
  FORM_LOCATION
} from '@root/constants'


export default function Listing() {
  const router = useRouter()
  const roomId = router.query.pid
  const [form, setForm] = useState(FORM_LISTING)
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
      <main className='my-5 py-14 px-16 min-h-[40rem]'>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Your listing</h1>
        <section className='flex'>
          <SideBar
            room={room}
            setRoom={setRoom}
            setForm={setForm}
          />
          { form === FORM_LISTING &&
            <EditRoomOpts
              room={room}
              setRoom={setRoom}
              setForm={setForm}
            />
          }
          { form === FORM_PRICING &&
            <Pricing
              room={room}
              setRoom={setRoom}
              setForm={setForm}
            />
          }
          { form === FORM_DESCRIPTION &&
            <Description
              room={room}
              setRoom={setRoom}
              setForm={setForm}
            />
          }
          { form === FORM_PHOTOS &&
            <Photos
              room={room}
              setRoom={setRoom}
              setForm={setForm}
            />
          }
          { form === FORM_AMENITIES &&
            <Amenities
              room={room}
              setRoom={setRoom}
              setForm={setForm}
            />
          }
          { form === FORM_LOCATION &&
            <Location
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
