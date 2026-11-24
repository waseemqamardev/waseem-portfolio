import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const done = () => setShow(false)
    if (document.readyState === 'complete') {
      const t = window.setTimeout(done, 900)
      return () => window.clearTimeout(t)
    }
    window.addEventListener('load', () => {
      window.setTimeout(done, 500)
    })
    const fallback = window.setTimeout(done, 1600)
    return () => window.clearTimeout(fallback)
  }, [])

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
          aria-hidden
        >
          <motion.p
            className="font-serif text-4xl italic text-blood md:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Waseem
          </motion.p>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-blood"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
