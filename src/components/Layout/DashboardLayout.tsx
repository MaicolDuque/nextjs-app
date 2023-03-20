import { Header } from '@components/Layout/Header'
import { Sidebar } from '@components/Layout/Sidebar'
import { useGetProfileQuery } from '@store/api/apiSlice'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen bg-gray-200 font-roboto">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* {suppliers?.map((user) => {
                return <div key={user.name}>{user.name}</div>
              })} */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
