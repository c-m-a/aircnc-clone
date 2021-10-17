import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { signOut, useSession } from 'next-auth/client'
import { useRecoilState } from 'recoil'

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon
} from '@heroicons/react/solid'
import { XIcon } from '@heroicons/react/outline'

import { DateRangePicker } from 'react-date-range'
import { modalState } from '@atoms/modalAtom'

import Login from './Login'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function Header({ placeholder }) {
  const [scrollY, setScrollY] = useState(0)
  const [searchInput, setSearchInput] = useState('')
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [showMenu, setShowMenu] = useState(false)
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

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
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

  useEffect(() => {
    window.addEventListener('scroll', e => setScrollY(window.scrollY))

    return () => {
      window.removeEventListener('scroll', e => scrollY(window.scrollY))
    }
  }, [])

  return (
    <header className={ scrollY ? 'header-white shadow-lg' : 'header' }>
      <div className='flex justify-between'>
        <div
          onClick={() => router.push('/')}
          className='relative flex items-center h-10 w-40 sm:w-64 cursor-pointer my-auto'
        >
          <Image
            src='https://links.papareact.com/qd3'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        <div className={ scrollY ? 'search-input' : 'hidden' }>
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

        <div className={ scrollY ? 'header-right-menu' : 'header-right-menu text-white'}>
          { !session ?
            <p
              className='hidden lg:inline hover:bg-gray-100 px-5 py-2 rounded-full cursor-pointer'
              onClick={() => setShowModal(true)}
            >Become a host
            </p>
            :
            <p
              className='hidden lg:inline hover:bg-gray-100 px-5 py-2 rounded-full cursor-pointer'
              onClick={becomeAHost}
            >Become a host
            </p>

          }
          <GlobeAltIcon className='h-6 cursor-pointer' />
          { !session ?
              <div
                onClick={() => setShowModal(true)}
                className='flex items-center space-x-2 border-2 rounded-full p-2 bg-white text-gray-500 border-gray-500'
              >
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' />
              </div>
            :
              <div>
                <div
                  onClick={() => handleToggleMenu(true)}
                  className='flex items-center space-x-2 border-2 rounded-full p-2 hover:shadow-lg bg-white'
                >
                  <MenuIcon className={!session ? 'h-6' : 'h-6 mr-2'} />
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
                <div className={ showMenu ? 'dropdown-menu' : 'dropdown-menu-hidden' }>
                  <ul>
                    <li className='px-5 py-2 mt-2 hover:bg-gray-100 cursor-pointer font-medium text-gray-900'>Messages</li>
                    <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer font-medium text-gray-900'>Trips</li>
                    <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer font-medium text-gray-900'>Wishtlists</li>
                    <hr />
                    <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>Manage listings</li>
                    <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>Host an experience</li>
                    <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>Account</li>
                    <hr />
                    <li className='px-5 py-2 hover:bg-gray-100 cursor-pointer'>Help</li>
                    <li
                      className='px-5 py-2 mb-2 hover:bg-gray-100 cursor-pointer'
                      onClick={signOut}
                    >Log Out</li>
                  </ul>
                </div>
              </div>
          }
        </div>
      </div>

      <div className={ scrollY ? 'hidden' : 'explorer-header' }>
        <div>
          <div className='flex justify-center space-x-4 text-white mb-6'>
            <div className='py-2 px-4'>Places to stay</div>
            <div className='py-2 px-4'>Monthly stays</div>
            <div className='py-2 px-4'>Experiences</div>
          </div>
          <div className='flex rounded-full bg-gray-100 shadow-md w-[53rem]'>
            <div
              className='flex items-center p-4 w-[15.2rem] hover:bg-gray-200 rounded-full cursor-pointer'
              onClick={() => document.getElementById('location').focus()}
            >
              <div className='flex flex-col justify-center px-1 pl-4'>
                <label
                  className='text-gray-800 font-medium text-xs'
                  htmlFor='location'
                >Location</label>
                <input
                  className='w-40 outline-none bg-transparent text-sm cursor-pointer'
                  id='location'
                  name='location'
                  type='text'
                  placeholder='Where are you going?'
                />
              </div>
              <div className='flex justify-center w-[3rem]'>
                <div
                  className='flex justify-center items-center h-6 w-6 bg-gray-300 rounded-full'
                >
                  <XIcon
                    className='h-5 bg-gray-300 rounded-full'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center p-4 w-[10rem] hover:bg-gray-200 rounded-full cursor-pointer'>
              <div className='w-full ml-2'>
                <div
                  className='text-xs'
                >Check in</div>
                <div
                  className='text-gray-400 text-sm cursor-pointer'
                >Add dates</div>
              </div>
              <div className='flex justify-center w-[3rem]'></div>
            </div>
            <div className='flex items-center p-4 w-[10rem] hover:bg-gray-200 rounded-full cursor-pointer'>
              <div className='w-full ml-2'>
                <div
                  className='text-xs'
                >Check out</div>
                <div
                  className='text-gray-400 text-sm'
                >Add dates</div>
              </div>
              <div className='flex justify-center w-[3rem]'>
                <div
                  className='flex justify-center items-center h-6 w-6 bg-gray-300 rounded-full'
                >
                  <XIcon
                    className='h-5 bg-gray-300 rounded-full'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-grow justify-between items-center p-4 w-[16.5rem] hover:bg-gray-200 rounded-full cursor-pointer'>
              <div className='w-full'>
                <div
                  className='text-xs'
                >Guests</div>
                <div
                  className='text-gray-400 text-sm cursor-pointer whitespace-nowrap'
                >
                  Add guests
                </div>
              </div>
              <div className='flex justify-center w-[3rem] mx-3'>
                <div
                  className='flex justify-center items-center h-6 w-6 bg-gray-300 rounded-full'
                >
                  <XIcon
                    className='h-5 bg-gray-300 rounded-full'
                  />
                </div>
              </div>
              <button
                className='flex items-center h-8 bg-red-400 text-white rounded-full py-6 px-4 cursor-pointer text-sm'
              >
                <SearchIcon
                  className='h-6 mr-2'
                />
                <span
                  className='font-semibold'
                >Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      { searchInput && (
        <div className='flex flex-col col-span-3 items-center mx-auto w-[20rem]'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
          />
          <div className='flex flex-grow items-center border-b mb-4'>
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
    </header>
  )
}

