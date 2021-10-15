export default function Location() {
  return (
    <div className='mt-5 p-2 w-full'>
      <div className='mb-5 w-full'>
        <label
          className='font-medium text-lg px-4 my-auto'
          htmlFor='price'>Location</label>
        <input
          className='border-2 border-gray-500 p-2 rounded-lg w-full'
          id='location'
          name='location'
          type='text'
          placeholder='Listing address...'
        />
      </div>
    </div>
  )
}

