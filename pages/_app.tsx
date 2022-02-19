import '../styles/dist/vault.scss';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  
  
  // return <Component {...pageProps} />
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)

}

export default MyApp
