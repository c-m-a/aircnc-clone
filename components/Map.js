import { useState } from 'react'
import Image from 'next/image'

import { StarIcon } from '@heroicons/react/solid'
import getCenter from 'geolib/es/getCenter'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search obj into the { latitude: ..., longitude: ... }
  const coordinates = searchResults.map(r => ({
    longitude: r.long,
    latitude: r.lat
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle={process.env.MAP_STYLE}
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      { searchResults.map((r, idx) => (
        <div
          key={idx}
        >
          <Marker
            className='rounded-full border font-semibold bg-white px-3 py-1 hover:z-40 hover:text-lg transition duration-100 ease-out'
            longitude={r.long}
            latitude={r.lat}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(r)}
              aria-label='price-tag'
            >{r.price}</p>
          </Marker>

          { selectedLocation.long === r.long ? (
            <Popup
              className='rounded-4xl z-40 max-w-[21.2rem]'
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={r.lat + .0013}
              longitude={r.long}
            >
              <div className='relative h-24 w-full md:h-52 md:w-80 flex-shrink-0 mb-5'>
                <Image
                  className='border-b'
                  src={r.img}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='px-3'>
                <p className='flex items-center'>
                  <StarIcon className='h-5 text-red-400 mr-1' />
                  {r.star}
                </p>
                <p className='text-lg whitespace-pre-line'>{r.title}</p>
                <p className='text-lg lg:text-2xlg font-semibold pb-2'>{r.price}</p>
              </div>
            </Popup>
          ) : (null)}
        </div>
      )) }
    </ReactMapGL>
  )
}

