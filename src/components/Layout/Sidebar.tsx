import { useDispatch, useSelector } from 'react-redux'
import { IconHome, IconUsers, IconShoppingCart } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ALO_APPS } from '@helpers/constants'
import {
  getAloId,
  isOpenSideBar,
  setIsOpenSideBar,
  setSidebarItem,
} from '@store/slices/appSlice'
import { SidebarItem } from './SidebarItem'

export function Sidebar() {
  const isOpen = useSelector(isOpenSideBar)
  const aloId = useSelector(getAloId)
  const router = useRouter()
  const titleDashboard = ALO_APPS[aloId]?.title
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSidebarItem(router.pathname))
  }, [])

  return (
    <>
      <div className="flex">
        {/* <!-- Backdrop --> */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
          onClick={() => dispatch(setIsOpenSideBar(false))}
        ></div>
        {/* <End Backdrop */}

        <div
          className={` ${
            isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
          } fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                  fill="#4C51BF"
                  stroke="#4C51BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                  fill="white"
                />
              </svg>

              <span className="mx-2 text-2xl font-semibold text-white">
                {titleDashboard}
              </span>
            </div>
          </div>

          <nav className="mt-10">
            <SidebarItem url="/dashboard" text="Inicio" icon={<IconHome />} />
            <SidebarItem
              url="/dashboard/suppliers"
              text="Proveedores"
              icon={<IconUsers />}
            />
            <SidebarItem
              url="/dashboard/products"
              text="Productos"
              icon={<IconShoppingCart />}
            />
          </nav>
        </div>
      </div>
    </>
  )
}
