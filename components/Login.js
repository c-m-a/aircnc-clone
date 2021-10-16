import { useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/client'
import { useRecoilState } from 'recoil'
import { modalState } from '@atoms/modalAtom'

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
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleChangePhone = e => {
    setPhone(e.target.value)
  }

  return (
    <>
      <div className='bg-white md:rounded-xl w-full h-screen md:w-[35.5rem] md:h-[42.6rem] md:shadow-lg'>
        <div className='flex justify-between items-center p-5 border-b'>
          <XIcon
            className='h-5 hover:bg-gray-50 rounded'
            onClick={ () => setShowModal(false) }
          />
          <h2 className='text-lg font-semibold'>Log in or sign up</h2>
          <i></i>
        </div>
        <div className='p-10'>
          <h2 className="text-3xl font-semibold mb-4">Welcome to Aircnc</h2>
          <div className='border-2 border-gray-500 h-14 rounded-lg flex items-center px-3'>
            <select
              className='text-xl w-full outline-none bg-transparent'
              onChange={e => setCountryCode(e.target.value)}
            >
              { countryCodes.map((country, idx) => (
                <option key={idx} value={country.id}>{`${country.name} (+${country.id})`}</option>
              )) }
            </select>
          </div>
          <div className='border-2 border-gray-500 h-14 rounded-lg flex items-center px-3'>
            <input
              className='text-xl w-full bg-transparent outline-none'
              type='text'
              value={phone}
              onChange={handleChangePhone}
              placeholder='Phone number'
            />
          </div>
          <p className='mb-5'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
          <div className='flex justify-center mb-5'>
            <button
              className='bg-red-400 text-white text-lg px-5 py-3 font-semibold rounded-lg w-full'
            >
              continue
            </button>
          </div>

          <div className='flex justify-between items-center space-x-4 mb-5'>
            <i className='border w-full'></i>
            <span>or</span>
            <i className='border w-full'></i>
          </div>

          <div className='flex justify-center mb-5'>
            <button
              className='flex justify-between border-2 border-gray-400 text-gray-500 text-lg px-5 py-2 font-semibold rounded-lg w-full hover:border-gray-800'
              onClick={signIn}
            >
              <Image
                src='https://links.papareact.com/t4i'
                height={45}
                width={45}
                objectFit='contain'
              />
              <span className='my-auto'>
                Continue with Facebook
              </span>
              <i></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
