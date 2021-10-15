import { useState } from 'react'

export default function Amenities() {
  const [amenities, setAmenities] = useState({
    has_tv: false,
    has_kitchen: false,
    has_wifi: false,
    has_heating: false,
    has_aircon: false,
    has_washing_machine: false
  })

  const {
    has_tv,
    has_kitchen,
    has_wifi,
    has_heating,
    has_aircon,
    has_washing_machine
  } = amenities

  const handleToggleCheckBox = e => {
    setAmenities(amenities => ({
      ...amenities,
      [e.target.name]: e.target.checked
    }))
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-3 grid-rows-3 gap-3 grid-flow-row p-3'>
        <div className='text-lg'>
          <input
            className='h-4 w-4 mr-3'
            type='checkbox'
            name='has_tv'
            defaultChecked={has_tv}
            onClick={e => handleToggleCheckBox(e)}
          />
          TV
        </div>
        <div className='text-lg'>
          <input
            className='h-4 w-4 mr-3'
            type='checkbox'
            name='has_kitchen'
            defaultChecked={has_kitchen}
            onClick={e => handleToggleCheckBox(e)}
          />
          Kitchen
        </div>
        <div className='text-lg'>
          <input
            className='h-4 w-4 mr-3'
            type='checkbox'
            name='has_wifi'
            defaultChecked={has_wifi}
            onClick={e => handleToggleCheckBox(e)}
          />
          WiFi
        </div>
        <div className='text-lg'>
          <input
            className='h-4 w-4 mr-3'
            type='checkbox'
            name='has_heating'
            defaultChecked={has_heating}
            onClick={e => handleToggleCheckBox(e)}
          />
          Heating
        </div>
        <div className='text-lg'>
          <input
            className='h-4 w-4 mr-3'
            type='checkbox'
            name='has_aircon'
            defaultChecked={has_aircon}
            onClick={e => handleToggleCheckBox(e)}
          />
          Air Conditioning
        </div>
        <div className='text-lg'>
          <input
            className='h-4 w-4 mr-3'
            type='checkbox'
            name='has_washing_machine'
            defaultChecked={has_washing_machine}
            onClick={e => handleToggleCheckBox(e)}
          />
          Washing Machine
        </div>
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

