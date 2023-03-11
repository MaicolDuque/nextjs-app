import { createContext, useContext, useEffect, useState } from 'react'
import { authUser } from '../services/user.service'
import { User, UserContext } from '../models/models'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const AuthContext = createContext<UserContext | null>(null)

export function ProviderAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth() as UserContext
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth(){
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const singnIn = async (email: string, password: string) => {
    try {
      const { access_token } = await authUser({ email, password })
      Cookies.set('token', access_token, { expires: 7 })
      return Promise.resolve(access_token)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const signOut = () => {
    Cookies.remove('token')
    router.push('/')
  }

  return {
    user,
    singnIn,
    signOut
  }
}
