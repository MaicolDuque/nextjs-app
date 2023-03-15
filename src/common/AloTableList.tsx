import { useEffect, useMemo, useState } from 'react'

interface Props {
  title: string
  dataHeader: Array<string>
  dataBody: Array<Record<string, any>>
  withSearch?: boolean
  searchProperty?: string
  textButtonCreate?: any;
  iconButtonCreate?: React.ReactNode;
  showActions?: boolean
  actions?: { action: string; icon: React.ReactNode }[]
  onAddNew?: () => void
  onClickAction?: (action: string, data: Record<string, any>) => void
}

export function AloTableList({
  title,
  textButtonCreate,
  iconButtonCreate,
  withSearch,
  searchProperty,
  dataBody,
  dataHeader,
  showActions,
  actions,
  onAddNew,
  onClickAction,
}: Props) {
  const [properties, setProperties] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const dataFiltered = useMemo(() => {
    const searchLower = search.toLocaleLowerCase()
    return dataBody.filter((item) =>
      (item[searchProperty ?? ''] as string)
        .toLocaleLowerCase()
        ?.includes(searchLower)
    )
  }, [search, dataBody])

  useEffect(() => {
    const keys = Object.keys(dataBody?.[0])
    setProperties(keys)
  }, [dataBody.length])

  const handleClickAction = (action: string, data: Record<string, any>) => {
    if (onClickAction) onClickAction(action, data)
  }

  return (
    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">{title}</h2>
            {/* <span className="text-xs">All products item</span> */}
          </div>
          <div className="flex items-center justify-between">
            {withSearch && (
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <input
                  className="bg-gray-50 outline-none ml-1 block"
                  type="text"
                  name="search"
                  id="search"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar..."
                />
              </div>
            )}
            <div className="lg:ml-40 ml-10 space-x-8">
              {textButtonCreate && (
                <button
                  onClick={onAddNew}
                  className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex gap-3"
                >
                  {iconButtonCreate}
                  {textButtonCreate}
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {dataHeader.map((header) => {
                      return (
                        <th
                          key={header}
                          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      )
                    })}
                    {showActions && (
                      <th
                        key="actions-th"
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {dataFiltered.map((data, index) => {
                    return (
                      <tr
                        key={data.id}
                        className="odd:bg-white even:bg-slate-50"
                      >
                        {properties.map((info, indexD) => {
                          return (
                            <td
                              key={data.id + '-' + info}
                              className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                            >
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data[properties[indexD]]}
                              </p>
                            </td>
                          )
                        })}
                        {showActions && (
                          <td
                            key={'actions-' + data.id}
                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-2"
                          >
                            {actions?.map((action) => (
                              <span
                                key={action.action}
                                className="cursor-pointer"
                                title={action.action}
                                onClick={() =>
                                  handleClickAction(action.action, data)
                                }
                              >
                                {action.icon}
                              </span>
                            ))}
                          </td>
                        )}
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
