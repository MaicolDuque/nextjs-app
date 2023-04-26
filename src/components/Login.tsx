import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import {
  ALO_APPS,
  ALO_IDS_SUPPORTED,
  DEFAULT_ALT,
  DEFAULT_IMG,
} from '@helpers/constants'
import { useAuth } from '@hooks/userContext'
import { useDispatch } from 'react-redux'
import { setAloId, setShowLoading } from '@store/slices/appSlice'

export function Login({ aloId }: { aloId: string }) {
  const auth = useAuth()
  const router = useRouter()
  const dispatch = useDispatch()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const aloidRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const email = emailRef.current?.value ?? ''
    const password = passwordRef.current?.value ?? ''
    const aloid = aloidRef.current?.value ?? aloId
    dispatch(setShowLoading(true))
    auth
      ?.singnIn(email, password)
      .then((user) => {
        console.log({ user, aloId })
        dispatch(setShowLoading(false))
        dispatch(setAloId(aloid))
        router.push('/dashboard')
      })
      .catch((error) => {
        dispatch(setShowLoading(false))
        console.error({ error })
      })
  }

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white w-full md:w-1/2 xl:w-2/3 h-screen shadow-sm">
        <div className="flex flex-row justify-center items-center h-full">
          <Image
            width={300}
            height={300}
            src={ALO_APPS[aloId]?.image ?? DEFAULT_IMG}
            alt={ALO_APPS[aloId]?.alt ?? DEFAULT_ALT}
          ></Image>
        </div>
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center border-l-2 border-gray-300-200"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Incio de sesión
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            {aloId === '' && (
              <div>
                <label className="block text-gray-700">Alo Id</label>
                <select
                  name="aloid"
                  id="aloid"
                  ref={aloidRef}
                  className="bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-300 px-4 py-4 text-sm rounded-lg focus:outline-none focus:ring-indigo-500 focus:indigo-blue-500 block w-full "
                >
                  {ALO_IDS_SUPPORTED.map((id: string) => {
                    return (
                      <option
                        key={ALO_APPS[id].value}
                        value={ALO_APPS[id].value}
                      >
                        {ALO_APPS[id].title}
                      </option>
                    )
                  })}
                </select>
              </div>
            )}

            <div>
              <label className="block text-gray-700">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese correo electrónico"
                className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                required
                ref={emailRef}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese contraseña"
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
                ref={passwordRef}
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                ¿Olvidaste contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Inicia sesión
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />
        </div>
      </div>
    </section>
  )
}
