import type { AppProps } from 'next/app'
import { store } from '@store/store'
import { Provider } from 'react-redux'

import '../styles/talwind.css'
import { ProviderAuth } from '@hooks/useAuth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProviderAuth>
        <Component {...pageProps} />
      </ProviderAuth>
    </Provider>
  )
}
