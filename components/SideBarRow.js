export default function SideBarRow({ title }) {
  return (
    <div className='cursor-pointer py-3'>
      <p className='text-lg font-medium'>{title}</p>
    </div>
  )
}
