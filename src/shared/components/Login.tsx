import { ALO_APPS, DEFAULT_ALT, DEFAULT_IMG } from '@shared/helpers/constants'
import Image from 'next/image'

export function Login({ aloId }: { aloId: string }) {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-gray-50 w-full md:w-1/2 xl:w-2/3 h-screen shadow-sm">
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
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Incio de sesión {aloId}
          </h1>

          <form className="mt-6" action="#" method="POST">
            {aloId === '' && (
              <div>
                <label className="block text-gray-700">Alo Id</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Ingrese Alo Id"
                  className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700">Correo electrónico</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Ingrese correo electrónico"
                className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Ingrese contraseña"
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
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
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
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
