import { increment, valueSel } from '@store/slices/appSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard() {
  const value = useSelector(valueSel)
  const dispatch = useDispatch()
  return (
    <>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>➕</button>
      <div>Hello World !!</div>
    </>
  )
}
