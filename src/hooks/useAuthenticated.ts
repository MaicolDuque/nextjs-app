import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export function useAuthenticated(){
  const cookieToken = Cookies.get('token')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    setIsAuthenticated(Boolean(cookieToken))
  }, [cookieToken])

  return {
    isAuthenticated
  }
}
