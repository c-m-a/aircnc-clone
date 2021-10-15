import SideBarRow from './SideBarRow'

import {
  FORM_LISTING,
  FORM_PRICING,
  FORM_DESCRIPTION,
  FORM_PHOTOS,
  FORM_AMENITIES,
  FORM_LOCATION
} from '@root/constants'


export default function SideBar({ form, setForm }) {
  return (
    <section className='p-2 min-w-[20rem] max-w-[30rem]'>
      <SideBarRow
        title='Listing'
        setForm={setForm}
        formOpt={FORM_LISTING}
        active={form === FORM_LISTING}
      />
      <SideBarRow
        title='Pricing'
        setForm={setForm}
        formOpt={FORM_PRICING}
        active={form === FORM_PRICING}
      />
      <SideBarRow
        title='Description'
        setForm={setForm}
        formOpt={FORM_DESCRIPTION}
        active={form === FORM_DESCRIPTION}
      />
      <SideBarRow
        title='Photos'
        setForm={setForm}
        formOpt={FORM_PHOTOS}
        active={form === FORM_PHOTOS}
      />
      <SideBarRow
        title='Amenities'
        setForm={setForm}
        formOpt={FORM_AMENITIES}
        active={form === FORM_AMENITIES}
      />
      <SideBarRow
        title='Location'
        setForm={setForm}
        formOpt={FORM_LOCATION}
        active={form === FORM_LOCATION}
      />
    </section>
  )
}
