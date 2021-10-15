export default function SideBarRow({ Icon, title, setForm, formOpt, active }) {
  return (
    <div
      className={ active ? 'side-bar-btn bg-gray-100' : 'side-bar-btn' }
      onClick={() => setForm(formOpt)}
    >
      <div className='flex items-center space-x-3'>
        { Icon && (
          <Icon className='h-5 w-5' />
        ) }
        <p className='text-lg font-medium hidden sm:inline-flex'>{title}</p>
      </div>
      <i></i>
    </div>
  )
}
