import Router from 'next/router'
import { Provider } from 'next-auth/client'

import ProgressBar from '@badrap/bar-of-progress'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'

const progress = new ProgressBar({
  size: 4,
  color: '#fe595e',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

