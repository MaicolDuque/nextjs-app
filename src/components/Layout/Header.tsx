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
          <button className="flex mx-4 text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative">
            {/* Add event to clope open dropdown */}
            <button
              onClick={() => setDropdown(!dropdown)}
              className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
            >
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
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
                x-cloak
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
