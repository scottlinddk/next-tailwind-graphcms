import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/globals.scss'



export default function MyApp({ Component, pageProps, router }) {
  const routerKey = router._key

  const pageAnimations = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -100
    }
  }

  return (
    <>
      <Head>
        <meta name="keywords" content="Scott Lind, frontendudvikler, udvikler, frontend, aalborg"/>
        {/* <meta name="description" content={description} />
        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout className="content">
        <AnimatePresence exitBeforeEnter>
          <motion.main key={routerKey}
          variants={pageAnimations} 
          initial="initial" 
          animate="animate"
          exit="exit"
          transition={{duration: 1}}
          className="relative pt-16"
          >
            <Component {...pageProps} key={routerKey} />
          </motion.main>
        </AnimatePresence>
      </Layout>
    </>
  )
}
