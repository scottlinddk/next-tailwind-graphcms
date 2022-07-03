import { motion, AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'



export default function MyApp({ Component, pageProps, router }) {
  const routerKey = router._key

  const pageAnimations = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -100
    }
  }

  return (
    <Layout className="content">
      <AnimatePresence exitBeforeEnter>
        <motion.main key={routerKey}
        variants={pageAnimations} 
        initial="initial" 
        animate="animate"
        exit="exit"
        transition={{duration: 0.5}}
        >
          <Component {...pageProps} key={routerKey} />
        </motion.main>
      </AnimatePresence>
    </Layout>
  )
}
