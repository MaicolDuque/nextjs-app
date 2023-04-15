import { Component } from 'react'
import { DashboardLayout } from './DashboardLayout'
import { useSelector } from 'react-redux'
import { useAuthenticated } from '@hooks/useAuthenticated'
import { getAloId, getUser, isAppLoading, isOpenSideBar } from '@store/slices/appSlice'

interface Props {
  Component: any
  pageProps: any
}

export default function MainLayout({ Component, pageProps }: Props) {
  const hasAloid = useSelector(getAloId)
  const { isAuthenticated } = useAuthenticated()
  console.log({ isAuthenticated, hasAloid })
  return (
    <>
      {hasAloid ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
