import { useRecoilState } from 'recoil'
import { modalState } from '@atoms/modalAtom'

import LargeCard from '@components/LargeCard'
import Login from '@components/Login'
import MediumCard from '@components/MediumCard'
import SmallCard from '@components/SmallCard'

export default function Main({ exploreData, cardsData }) {
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <main className='max-w-7xl mx-auto'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          { exploreData?.map(({ img, location, distance }, idx) => (
              <SmallCard
                key={idx}
                img={img}
                location={location}
                distance={distance}
              />
          )) }
        </div>
      </section>
      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          { cardsData?.map(({ img, title }, idx) => (
            <MediumCard
              key={idx}
              img={img}
              title={title}
            />
          )) }
        </div>
      </section>

      <LargeCard
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlist curated by Aircnc'
        buttonText='Get inspired!'
      />

      <div className={ showModal ? 'show-modal' : 'hide-modal' }>
        <Login />
      </div>
    </main>
  )
}
