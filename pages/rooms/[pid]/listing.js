import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import firebase, { db } from '../../../firebase'
import { doc, getDoc } from 'firebase/firestore'

import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import EditRoomOpts from '../../../components/EditRoomOpts'
import SideBar from '../../../components/SideBar'

export default function Listing() {
  const router = useRouter()
  const roomId = router.query.pid
  const [showModal, setShowModal] = useState(false)
  const [room, setRoom] = useState({})

  useEffect(async () => {
    if (roomId === undefined) return false;

    const roomRef = doc(db, 'rooms', roomId)
    const roomSnap = await getDoc(roomRef)
    setRoom(roomSnap.data())
  }, [roomId])

  return (
    <>
      <Header setShowModal={setShowModal} />
      <main className='my-5'>
        <SideBar />
        <EditRoomOpts
          room={room}
          setRoom={setRoom}
        />
      </main>
      <Footer />
    </>
  )
}
