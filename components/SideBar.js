import {
  CollectionIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  PhotographIcon,
  WifiIcon,
  LocationMarkerIcon
} from '@heroicons/react/outline'

import {
  FORM_LISTING,
  FORM_PRICING,
  FORM_DESCRIPTION,
  FORM_PHOTOS,
  FORM_AMENITIES,
  FORM_LOCATION
} from '@root/constants'

import SideBarRow from './SideBarRow'


export default function SideBar({ form, setForm }) {
  return (
    <section className='p-2 sm:w-80'>
      <SideBarRow
        title='Listing'
        Icon={CollectionIcon}
        setForm={setForm}
        formOpt={FORM_LISTING}
        active={form === FORM_LISTING}
      />
      <SideBarRow
        title='Pricing'
        Icon={CurrencyDollarIcon}
        setForm={setForm}
        formOpt={FORM_PRICING}
        active={form === FORM_PRICING}
      />
      <SideBarRow
        title='Description'
        Icon={DocumentTextIcon}
        setForm={setForm}
        formOpt={FORM_DESCRIPTION}
        active={form === FORM_DESCRIPTION}
      />
      <SideBarRow
        title='Photos'
        Icon={PhotographIcon}
        setForm={setForm}
        formOpt={FORM_PHOTOS}
        active={form === FORM_PHOTOS}
      />
      <SideBarRow
        title='Amenities'
        Icon={WifiIcon}
        setForm={setForm}
        formOpt={FORM_AMENITIES}
        active={form === FORM_AMENITIES}
      />
      <SideBarRow
        title='Location'
        Icon={LocationMarkerIcon}
        setForm={setForm}
        formOpt={FORM_LOCATION}
        active={form === FORM_LOCATION}
      />
    </section>
  )
}
