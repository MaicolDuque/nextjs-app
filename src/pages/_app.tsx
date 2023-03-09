import type { AppProps } from 'next/app'

import '../styles/talwind.css'
import { ProviderAuth } from '@hooks/useAuth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderAuth>
      <Component {...pageProps} />
    </ProviderAuth>
  )
}
