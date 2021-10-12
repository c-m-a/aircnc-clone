import { useState } from 'react'
import firebase, { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

import { ROOM_CFG } from '../constants'

export default function BecomeAHost() {
  const [room, setRoom] = useState({
    id: 0,
    home_type: 0,
    room_type: 0,
    accommodate: 0,
    no_bedrooms: 0,
    no_bathrooms: 0,
  })

  const handleSubmit = async () => {
    const res = await addDoc(collection(db, 'rooms'), room)
    console.log(res)
  }

  const isAllSelected = () => {
    for (const key of Object.keys(room)) {
      const value = room[key]
      const notSelected = key !=='id' && parseInt(value) === 0
      if (notSelected) return false;
    }

    return true;
  }

  return (
    <div>
      <section className='flex-grow pt-14 px-16'>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Start a new listing</h1>

        <div className='flex justify-center mb-3'>
          <select
            className='py-5 px-2 border-2 rounded-lg w-80'
            onChange={e => setRoom({ ...room, home_type: e.target.value })}
          >
            { ROOM_CFG.homeType.map(rt => (
              <option key={rt.id} value={rt.id}>{rt.name}</option>
            )) }
          </select>
        </div>

        <div className='flex justify-center mb-3'>
          <select
            className='py-5 px-2 border-2 rounded-lg w-80'
            onChange={e => setRoom({ ...room, room_type: e.target.value })}
          >
            { ROOM_CFG.roomType.map(rt => (
              <option key={rt.id} value={rt.id}>{rt.name}</option>
            )) }
          </select>
        </div>

        <div
          className='flex justify-center mb-3'
          onChange={e => setRoom({ ...room, accommodate: e.target.value })}
        >
          <select className='py-5 px-2 border-2 rounded-lg w-80'>
            { ROOM_CFG.accommodate.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            )) }
          </select>
        </div>

        <div className='flex justify-center mb-3'>
          <select
            className='py-5 px-2 border-2 rounded-lg w-80'
            onChange={e => setRoom({ ...room, no_bedrooms: e.target.value })}
          >
            { ROOM_CFG.bedrooms.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            )) }
          </select>
        </div>

        <div className='flex justify-center mb-5'>
          <select
            className='py-5 px-2 border-2 rounded-lg w-80'
            onChange={e => setRoom({ ...room, no_bathrooms: e.target.value })}
          >
            { ROOM_CFG.bathrooms.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            )) }
          </select>
        </div>

        { isAllSelected() &&
          <div className='flex justify-center mt-5'>
            <button
              onClick={handleSubmit}
              className='btn-primary w-80'
            >
              Create listing
            </button>
          </div>
        }
      </section>
    </div>
  )
}

