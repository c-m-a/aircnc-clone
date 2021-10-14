export default function Pricing() {
  return (
    <div className='mt-5 p-2 w-full'>
      <div className='flex mb-5'>
        <label
          className='font-medium text-lg px-4 my-auto'
          htmlFor='price'>Price</label>
        <input
          className='border p-2 w-full'
          id='price'
          name='price'
          type='number'
          placeholder='eg: 100'
        />
      </div>
      <div className='flex justify-center w-full'>
        <button
          className='btn-primary w-80'
        >
          Save
        </button>
      </div>
    </div>
  )
}

