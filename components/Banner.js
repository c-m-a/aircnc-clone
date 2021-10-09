import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative h-[30rem] sm:h-[40rem] lg:h-[50rem] xl:h-[60rem] 2xl:h-[70rem]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg mb-3'>Not sure where to go? Perfect!</p>
        <button className='text-sm sm:text-lg text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
      </div>
    </div>
  )
}

