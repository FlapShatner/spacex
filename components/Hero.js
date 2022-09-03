import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function Hero({ heroData }) {
  const ref = useRef(null)
  const { title, tagline, bg } = heroData

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center center', 'start start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <section className='hero'>
        <motion.div
          ref={ref}
          style={{ opacity: opacity }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='wrapper'>
          <h1>{title}</h1>
          <motion.h4>{tagline}</motion.h4>
        </motion.div>
      </section>
      <style jsx>
        {`
          .hero {
            background-image: url(${bg});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .hero h1 {
            font-size: var(--fs-xlarge);
          }
        `}
      </style>
    </>
  )
}
