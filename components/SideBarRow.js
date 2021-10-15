export default function SideBarRow({ title, setForm, formOpt, active }) {
  return (
    <div
      className={ active ? 'side-bar-btn bg-gray-100' : 'side-bar-btn' }
      onClick={() => setForm(formOpt)}
    >
      <p className='text-lg font-medium'>{title}</p>
    </div>
  )
}
