import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'

import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

export default function Search({ searchResults }) {
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

          <div className='flex flex-col'>
            { searchResults.map(({ img, location, title, description, star, price, total }, idx) => (
                <InfoCard
                  key={idx}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
            )) }
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[60rem] h-screen'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json())

  return {
    props: {
      searchResults
    }
  }
}
