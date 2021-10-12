import RoomOpts from '../components/RoomOpts'

export default function BecomeAHost() {
  return (
    <div>
      <section className='flex-grow pt-14 px-16'>
        <h1 className='text-3xl font-semibold mt-2 mb-6'>Start a new listing</h1>

        <RoomOpts />
      </section>
    </div>
  )
}

