import { useAuth } from '@hooks/userContext'
import { setIsOpenSideBar } from '@store/slices/appSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function Header() {
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false)
  const auth = useAuth()

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-alo-primary">
        <div className="flex items-center">
        </div>

        <div className="flex items-center">
          <div className="relative">
            {/* Add event to clope open dropdown */}
            <button
              onClick={() => setDropdown(!dropdown)}
              className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
            >
              <img
                className="object-cover w-full h-full"
                src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-512.png"
                alt="Your avatar"
              />
            </button>

            {dropdown && (
              <div
                onClick={() => setDropdown(false)}
                className="fixed inset-0 z-10 w-full h-full"
              ></div>
            )}

            {dropdown && (
              <div
                x-show="dropdownOpen"
                className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-alo-primary hover:text-white"
                >
                  Profile
                </a>
                <div
                  onClick={() => auth?.signOut()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-alo-primary hover:text-white cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
