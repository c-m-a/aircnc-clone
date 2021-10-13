import SideBarRow from './SideBarRow'

import {
  FORM_OPTS,
  FORM_PRICING,
  FORM_DESCRIPTION,
  FORM_PHOTOS,
  FORM_AMENITIES,
  FORM_LOCATION
} from '@root/constants'


export default function SideBar({ setForm }) {
  return (
    <section className='p-2 min-w-[20rem] max-w-[30rem]'>
      <SideBarRow title='Listing' onClick={() => setForm(FORM_OPTS)} />
      <SideBarRow title='Pricing' onClick={() => setForm(FORM_PRICING)} />
      <SideBarRow title='Description' onClick={() => setForm(FORM_DESCRIPTION)} />
      <SideBarRow title='Photos' onClick={() => setForm(FORM_PHOTOS)} />
      <SideBarRow title='Amenities' onClick={() => setForm(FORM_AMENITIES)} />
      <SideBarRow title='Location' onClick={() => setForm(FORM_LOCATION)} />
    </section>
  )
}
