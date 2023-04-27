import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [aloTitle, setAloTitle] = useState('')
  useEffect(() => {
    setAloTitle(localStorage.getItem('alo-title') ?? '')
  }, [])
  return (
    <>
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
        Bienvenido a {aloTitle}
      </h1>
    </>
  )
}
