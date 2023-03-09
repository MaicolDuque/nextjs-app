
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ALO_IDS_SUPPORTED } from '../helpers/constants'
import { Login } from '@components/Login'

export default function AloApp(){
	const router = useRouter()
	const { aloId } = router.query
	useEffect(() => {
		if(aloId && !ALO_IDS_SUPPORTED.includes(aloId as string)) {
			router.push('/')
		}
	},[aloId])

  return  <Login aloId={aloId as string} />
}
