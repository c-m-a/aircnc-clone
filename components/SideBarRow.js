export default function SideBarRow({ title, setForm, formOpt }) {
  return (
    <div
      className='cursor-pointer py-3'
      onClick={() => setForm(formOpt)}
    >
      <p className='text-lg font-medium'>{title}</p>
    </div>
  )
}
