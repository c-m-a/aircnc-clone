import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useSession } from 'next-auth/client'

import { DateRangePicker } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import Login from './Login'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon
} from '@heroicons/react/solid'

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuest] = useState(1)
  const router = useRouter()
  const [session] = useSession()

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    })
  }

  const becomeAHost = () => {
    router.push('/become-a-host')
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center h-10 cursor-pointer my-auto'
      >
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      <div className='flex items-center md:border-2 md:shadow-sm rounded-full py-2 min-w-[19rem]'>
        <input
          className='flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={ placeholder || 'Start your search' }
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2'
        />
      </div>

      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        { !session ?
          <p
            className='hidden lg:inline hover:bg-gray-50 px-3 py-2 rounded-full cursor-pointer'
            onClick={() => setShowModal(true)}
          >Become a host
          </p>
          :
          <p
            className='hidden lg:inline hover:bg-gray-50 px-3 py-2 rounded-full cursor-pointer'
            onClick={becomeAHost}
          >Become a host
          </p>

        }
        <GlobeAltIcon className='h-6 cursor-pointer' />
        { !session ?
          <div
            onClick={() => setShowModal(true)}
            className='flex items-center space-x-2 border-2 rounded-full p-2'
          >
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6' />
          </div>
          :
          <div
            onClick={() => alert('User logged in!')}
            className='flex items-center space-x-2 border-2 rounded-full p-2 hover:shadow-lg'
          >
            <MenuIcon className={!session? 'h-6' : 'h-6 mr-2'} />
            { !session ?
                <UserCircleIcon className='h-6' />
                :
                <Image
                  className='rounded-full cursor-pointer'
                  src={session.user.image}
                  height='22'
                  width='22'
                />
            }
          </div>
        }
      </div>

      { searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
            <UsersIcon className='h-5' />
            <input
              className='w-12 pl-2 text-lg outline-none text-red-400'
              type='number'
              value={noOfGuests}
              min={1}
              onChange={e => setNoOfGuest(e.target.value)}
            />
          </div>
          <div className='flex'>
            <button
              className='flex-grow text-gray-500'
              onClick={ () => setSearchInput('') }
            >Cancel</button>
            <button
              className='flex-grow text-red-400'
              onClick={search}
            >Search</button>
          </div>
        </div>
      ) }

      <div className={ showModal ? 'show-modal' : 'hide-modal' }>
        <Login setShowModal={setShowModal} />
      </div>
    </header>
  )
}

