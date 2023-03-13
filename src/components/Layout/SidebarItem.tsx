import { getSidebarItemSelected, setSidebarItem } from '@store/slices/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

interface Props {
  text: string
  url: string
  icon: React.ReactNode
}

export function SidebarItem({ text, icon, url }: Props) {
  const dispatch = useDispatch()
  const isSelected = useSelector(getSidebarItemSelected) === url
  return (
    <>
      <Link href={url}>
        <div
          onClick={() => dispatch(setSidebarItem(url))}
          className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4
          ${
            isSelected
              ? 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100'
              : 'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
          } `}
        >
          {icon}
          <span className="mx-4 cursor-pointer">{text}</span>
        </div>
      </Link>
    </>
  )
}
