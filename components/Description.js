export default function Description() {
  return (
    <div className='mt-5 p-2 w-full'>
      <div className='mb-4'>
        <input
          className='border-2 border-gray-500 p-2 rounded-lg w-full'
          type='text'
          name='listing_name'
          placeholder='what is your listing name?'
        />
      </div>
      <div className='mb-5 p-2 border-2 border-gray-500 rounded-lg'>
        <textarea
          className='w-full outline-none'
          id='summary'
          name='summary'
          rows='10'
        >
        </textarea>
      </div>
    </div>
  )
}

