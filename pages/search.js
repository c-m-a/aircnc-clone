import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Search() {
  const fmtDate = 'dd MMM yy'
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const fmtStartDate = format(new Date(startDate), fmtDate)
  const fmtEndDate = format(new Date(endDate), fmtDate)
  const range = `${fmtStartDate} - ${fmtEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-16'>
          <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} number of { noOfGuests == 1 ? 'guest' : 'guests' }</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='btn-default'>Cancellation Flexibility</p>
            <p className='btn-default'>Type of place</p>
            <p className='btn-default'>Price</p>
            <p className='btn-default'>Rooms & Beds</p>
            <p className='btn-default'>More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
