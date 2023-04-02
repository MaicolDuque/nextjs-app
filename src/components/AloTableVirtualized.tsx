import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useRef, useState } from 'react'
import { useVirtual } from 'react-virtual'

import estilos from './styles.module.css'

type Props = {
  columns: ColumnDef<any, any>[]
  data: any[];
  withSeatch?: boolean;
  height?: string;
}

export function AloTableVirtualized({
  columns,
  data,
  withSeatch = true,
  height = '70vh'
}: Props) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    globalFilterFn: (row, columnId, filterValue) => {
      const safeValue = (() => {
        const value = row.getValue(columnId)
        return typeof value === 'number' ? String(value) : value
      })()
      return (safeValue as string)
        ?.toLowerCase()
        .includes(filterValue.toLowerCase())
    },
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const { rows } = table.getRowModel()
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  })
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0

  return (
    <>
      <div>
        {withSeatch && (
          <input
            className=" my-4 appearance-none border-2 border-gray-200 rounded-lg px-4 py-3 w-1/3
          placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-alo-primary focus:shadow-lg"
            type="text"
            value={globalFilter ?? ''}
            placeholder="Buscar.."
            name="search"
            onChange={(e) => setGlobalFilter(String(e.target.value))}
          />
        )}
        <div ref={tableContainerRef} className={estilos.container} style={{ height }}>
          <table className="min-w-full leading-normal">
            <thead className="sticky m-0 top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="hover:bg-green-200">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      <div
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {paddingTop > 0 && (
                <tr>
                  <td className="p-6" style={{ height: `${paddingTop}px` }} />
                </tr>
              )}
              {virtualRows.map((virtualRow) => {
                const row = rows[virtualRow.index]
                return (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className="px-5 py-5 border-b border-gray-200  text-sm"
                        key={cell.id}
                      >
                        <div className="text-gray-900 whitespace-no-wrap">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                )
              })}
              {paddingBottom > 0 && (
                <tr>
                  <td style={{ height: `${paddingBottom}px` }} />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
