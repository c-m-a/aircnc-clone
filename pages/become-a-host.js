import { ROOM_CFG } from '../constants'

export default function BecomeAHost() {
  return (
    <div>
      <section className='flex-grow pt-14 px-16'>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Start a new listing</h1>

        <div className=''>
          <div className='flex justify-center mb-3'>
            <select className='py-5 px-2 border-2 rounded-lg w-80'>
              { ROOM_CFG.homeType.map(rt => (
                <option key={rt.id} value={rt.id}>{rt.name}</option>
              )) }
            </select>
          </div>

          <div className='flex justify-center mb-3'>
            <select className='py-5 px-2 border-2 rounded-lg w-80'>
              { ROOM_CFG.roomType.map(rt => (
                <option key={rt.id} value={rt.id}>{rt.name}</option>
              )) }
            </select>
          </div>

          <div className='flex justify-center mb-3'>
            <select className='py-5 px-2 border-2 rounded-lg w-80'>
              { ROOM_CFG.accommodate.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              )) }
            </select>
          </div>

          <div className='flex justify-center mb-3'>
            <select className='py-5 px-2 border-2 rounded-lg w-80'>
              { ROOM_CFG.bedrooms.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              )) }
            </select>
          </div>

          <div className='flex justify-center mb-5'>
            <select className='py-5 px-2 border-2 rounded-lg w-80'>
              { ROOM_CFG.bathrooms.map(b => (
                <option key={b.id} value={b.id}>{b.name}</option>
              )) }
            </select>
          </div>

          <div className='flex justify-center mt-5'>
            <button
              className='btn-primary w-80'
            >
              Create listing
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

