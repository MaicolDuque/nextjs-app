import type { AppProps } from 'next/app'
import { wrapper } from '@store/store'
import { Provider } from 'react-redux'

import '../styles/talwind.css'
import { ProviderAuth } from '@hooks/userContext'
import { DashboardLayout } from '@components/Layout/DashboardLayout'
import { useAuthenticated } from '@hooks/useAuthenticated'

export default function App({ Component, ...rest }: AppProps) {
  const { isAuthenticated } = useAuthenticated()
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return (
    <Provider store={store}>
      <ProviderAuth>
        {isAuthenticated ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ProviderAuth>
    </Provider>
  )
}
