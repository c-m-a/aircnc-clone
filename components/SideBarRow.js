export default function SideBarRow({ title, setForm, formOpt, active }) {
  return (
    <div
      className='cursor-pointer p-3 hover:bg-gray-100 rounded-lg'
      onClick={() => setForm(formOpt)}
    >
      <p className='text-lg font-medium'>{title}</p>
    </div>
  )
}
