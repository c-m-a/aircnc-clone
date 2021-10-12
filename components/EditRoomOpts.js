import { useState } from 'react'
import firebase, { db } from '../firebase'
import { useRouter } from 'next/router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

import { ROOM_CFG } from '../constants'

export default function RoomOpts({ room, setRoom }) {
  const router = useRouter()
  console.log(room)

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
    <>
      <div className='flex justify-center mb-3'>
        <select
          className='py-5 px-2 border-2 rounded-lg w-80'
          onChange={e => setRoom({ ...room, home_type: e.target.value })}
        >
          { ROOM_CFG.homeType.map(rt => (
            <option
              key={rt.id}
              value={rt.id}
              selected={parseInt(room.home_type) === rt.id && 'selected'}
            >{rt.name}</option>
          )) }
        </select>
      </div>

      <div className='flex justify-center mb-3'>
        <select
          className='py-5 px-2 border-2 rounded-lg w-80'
          onChange={e => setRoom({ ...room, room_type: e.target.value })}
        >
          { ROOM_CFG.roomType.map(rt => (
            <option
              key={rt.id}
              value={rt.id}
              selected={parseInt(room.room_type) === rt.id && 'selected'}
            >{rt.name}</option>
          )) }
        </select>
      </div>

      <div
        className='flex justify-center mb-3'
        onChange={e => setRoom({ ...room, accommodate: e.target.value })}
      >
        <select className='py-5 px-2 border-2 rounded-lg w-80'>
          { ROOM_CFG.accommodate.map(a => (
            <option
              key={a.id}
              value={a.id}
              selected={parseInt(room.accommodate) === a.id && 'selected'}
            >{a.name}</option>
          )) }
        </select>
      </div>

      <div className='flex justify-center mb-3'>
        <select
          className='py-5 px-2 border-2 rounded-lg w-80'
          onChange={e => setRoom({ ...room, no_bedrooms: e.target.value })}
        >
          { ROOM_CFG.bedrooms.map(b => (
            <option
              key={b.id}
              value={b.id}
              selected={parseInt(room.no_bedrooms) === b.id && 'selected'}
            >{b.name}</option>
          )) }
        </select>
      </div>

      <div className='flex justify-center mb-5'>
        <select
          className='py-5 px-2 border-2 rounded-lg w-80'
          onChange={e => setRoom({ ...room, no_bathrooms: e.target.value })}
        >
          { ROOM_CFG.bathrooms.map(b => (
            <option
              key={b.id}
              value={b.id}
              selected={parseInt(room.no_bathrooms) === b.id && 'selected'}
            >{b.name}</option>
          )) }
        </select>
      </div>

      { isAllSelected() &&
        <div className='flex justify-center mt-5'>
          <button
            onClick={handleUpdateRoom}
            className='btn-primary w-80'
          >
            Save
          </button>
        </div>
      }
    </>
  )
}
