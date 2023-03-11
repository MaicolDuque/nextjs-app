import type { AppProps } from 'next/app'
import { wrapper } from '@store/store'
import { Provider } from 'react-redux'

import '../styles/talwind.css'
import { ProviderAuth } from '@hooks/useAuth'

function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderAuth>
      <Component {...pageProps} />
    </ProviderAuth>
  )
}

export default wrapper.withRedux(App);
