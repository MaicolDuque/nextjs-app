import { useEffect, useState } from 'react'

interface Props {
  title: string
  dataHeader: Array<string>
  dataBody: Array<Record<string, any>>
  withSearch?: boolean
  textButtonCreate?: string;
  onAddNew?: () => void;
}

export function TableList({
  title,
  textButtonCreate,
  withSearch,
  dataBody,
  dataHeader,
  onAddNew
}: Props) {
  const [properties, setProperties] = useState<string[]>([])
  useEffect(() => {
    const keys = Object.keys(dataBody?.[0])
    setProperties(keys)
  }, [dataBody.length])

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
                  name=""
                  id=""
                  placeholder="search..."
                />
              </div>
            )}
            <div className="lg:ml-40 ml-10 space-x-8">
              {textButtonCreate && (
                <button onClick={onAddNew} className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
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
                  </tr>
                </thead>
                <tbody>
                  {dataBody.map((data, index) => {
                    return (
                      <tr key={data.id} className="bg-black">
                        {properties.map((info, indexD) => {
                          return (
                            <td
                              key={data.id + '-' + info}
                              className="px-5 py-5 border-b border-gray-200 bg-white text-sm hover:bg-gray-50"
                            >
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data[properties[indexD]]}
                              </p>
                            </td>
                          )
                        })}
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
