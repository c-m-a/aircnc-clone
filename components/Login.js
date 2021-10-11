import { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'

const countryCodes = [
  {
    id: 57,
    name: 'Colombia'
  },
  {
    id: 51,
    name: 'Peru'
  }
]

export default function Login() {
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('57')

  const handleChangePhone = e => {
    setPhone(e.target.value)
  }

  return (
    <>
      <div className='bg-white w-40 rounded-xl xl:min-w-[57rem] xl:max-h-[60rem]'>
        <div className='flex justify-between items-center p-5 border-b'>
          <XIcon className='h-5 hover:bg-gray-50 rounded' />
          <h2 className='text-lg font-semibold'>Log in or sign up</h2>
          <i></i>
        </div>
        <div className='p-10'>
          <h2 className="text-3xl font-semibold mb-4">Welcome to Aircnc</h2>
          <div className='border-2 border-gray-500 h-20 rounded flex items-center px-3'>
            <select
              className='text-2xl w-full'
              onChange={e => setCountryCode(e.target.value)}
            >
              { countryCodes.map(country => (
                <option value={country.id}>{`${country.name} (+${country.id})`}</option>
              )) }
            </select>
          </div>
          <div className='border-2 border-gray-500 h-20 rounded flex items-center px-3'>
            <input
              className='text-2xl w-full bg-transparent outline-none'
              type='text'
              value={phone}
              onChange={handleChangePhone}
              placeholder='Phone number'
            />
          </div>
          <p className='mb-5'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
          <div className='flex justify-center'>
            <button
              className='bg-red-400 text-white text-xl px-5 py-3 font-semibold rounded w-full'
            >
              continue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
