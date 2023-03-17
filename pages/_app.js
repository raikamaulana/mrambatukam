import '@/raika-project/styles/globals.css'
import Layout from '../components/Layout/,ayout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
