import SideBarRow from './SideBarRow'

import {
  FORM_LISTING,
  FORM_PRICING,
  FORM_DESCRIPTION,
  FORM_PHOTOS,
  FORM_AMENITIES,
  FORM_LOCATION
} from '@root/constants'


export default function SideBar({ setForm }) {
  return (
    <section className='p-2 min-w-[20rem] max-w-[30rem]'>
      <SideBarRow
        title='Listing'
        setForm={setForm}
        form_opt={FORM_LISTING}
      />
      <SideBarRow
        title='Pricing'
        setForm={setForm}
        form_opt={FORM_PRICING}
      />
      <SideBarRow
        title='Description'
        setForm={setForm}
        form_opt={FORM_DESCRIPTION}
      />
      <SideBarRow
        title='Photos'
        setForm={setForm}
        form_opt={FORM_PHOTOS}
      />
      <SideBarRow
        title='Amenities'
        setForm={setForm}
        form_opt={FORM_AMENITIES}
      />
      <SideBarRow
        title='Location'
        setForm={setForm}
        form_opt={FORM_LOCATION}
      />
    </section>
  )
}
