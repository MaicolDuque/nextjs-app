import { AloTableVirtualized } from '@components/AloTableVirtualized'
import { useGetProfileQuery } from '@store/api/apiSlice'
import { increment, valueSel } from '@store/slices/appSlice'
import { createColumnHelper } from '@tanstack/react-table'
import { useDispatch, useSelector } from 'react-redux'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
  image: string
}

const defaultData: Person[] = Array(50000)
  .fill(0)
  .map((_val, idx) => {
    return {
      firstName: 'tanner ' + idx,
      lastName: 'linsley',
      age: 24 + idx,
      visits: 100 + idx,
      status: 'In Relationship ' + idx,
      progress: 50 + idx,
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7783',
    }
  })

const columnHelper = createColumnHelper<Person>()
const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('age', {
    id: 'age',
    header: () => 'Age',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    aggregatedCell: (r) => r.renderValue()?.toString,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    cell: (info) => info.renderValue(),
  }),
]

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
      <AloTableVirtualized columns={columns} data={defaultData} />
    </>
  )
}
