import { useState } from 'react'
import firebase, { db } from '../firebase'
import { useRouter } from 'next/router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

import { ROOM_CFG } from '../constants'

export default function RoomOpts({ room, setRoom }) {
  const router = useRouter()

  const handleUpdateRoom = async () => {
    const roomRef = await addDoc(collection(db, 'rooms'), {
      ...room,
      timestamp: Timestamp.fromDate(new Date()),
      published: false
    })

    if (roomRef.id) {
      router.push({
        pathname: 'rooms/[pid]/listing',
        query: { pid: roomRef.id }
      })
    }
  }

  const isAllSelected = () => {
    for (const key of Object.keys(room)) {
      const value = room[key]
      const notSelected = parseInt(value) === 0
      if (notSelected) return false;
    }

    return true;
  }

  return (
    <article className='w-full min-w-[15rem] md:w-80 mx-auto'>
      <div className='flex justify-center mb-3'>
        <select
          className='py-5 px-2 border-2 border-gray-500 bg-white rounded-lg w-full'
          onChange={e => setRoom({ ...room, home_type: e.target.value })}
          value={room.home_type}
        >
          { ROOM_CFG.homeType.map(rt => (
            <option
              key={rt.id}
              value={rt.id}
            >{rt.name}</option>
          )) }
        </select>
      </div>

      <div className='flex justify-center mb-3'>
        <select
          className='py-5 px-2 border-2 border-gray-500 bg-white rounded-lg w-full'
          onChange={e => setRoom({ ...room, room_type: e.target.value })}
          value={room.room_type}
        >
          { ROOM_CFG.roomType.map(rt => (
            <option
              key={rt.id}
              value={rt.id}
            >{rt.name}</option>
          )) }
        </select>
      </div>

      <div
        className='flex justify-center mb-3'
        onChange={e => setRoom({ ...room, accommodate: e.target.value })}
        value={room.accommodate}
      >
        <select
          className='py-5 px-2 border-2 border-gray-500 bg-white rounded-lg w-full'>
          { ROOM_CFG.accommodate.map(a => (
            <option
              key={a.id}
              value={a.id}
            >{a.name}</option>
          )) }
        </select>
      </div>

      <div className='flex justify-center mb-3'>
        <select
          className='py-5 px-2 border-2 border-gray-500 bg-white rounded-lg w-full'
          onChange={e => setRoom({ ...room, no_bedrooms: e.target.value })}
          value={room.no_bedrooms}
        >
          { ROOM_CFG.bedrooms.map(b => (
            <option
              key={b.id}
              value={b.id}
            >{b.name}</option>
          )) }
        </select>
      </div>

      <div className='flex justify-center mb-5'>
        <select
          className='py-5 px-2 border-2 border-gray-500 bg-white rounded-lg w-full'
          onChange={e => setRoom({ ...room, no_bathrooms: e.target.value })}
          value={room.no_bathrooms}
        >
          { ROOM_CFG.bathrooms.map(b => (
            <option
              key={b.id}
              value={b.id}
            >{b.name}</option>
          )) }
        </select>
      </div>
    </article>
  )
}

