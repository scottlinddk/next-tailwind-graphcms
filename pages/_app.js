import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="content">
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp
