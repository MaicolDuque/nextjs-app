import { AloTableVirtualized } from '@components/AloTableVirtualized'
import { useGetProfileQuery } from '@store/api/apiSlice'
import { increment, valueSel } from '@store/slices/appSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard() {
  const value = useSelector(valueSel)
  const dispatch = useDispatch()
  const { data: profileInfo } = useGetProfileQuery(undefined)
  return (
    <>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>➕</button>
      <div>Hello World !!</div>
      {JSON.stringify(profileInfo)}
      {/* <AloTable /> */}

      <AloTableVirtualized />
    </>
  )
}
