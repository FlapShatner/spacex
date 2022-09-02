import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  section {
    position: relative;
    height: 200vh;
  }
  div.desc {
    position: absolute;
    top: 20%;
    margin-left: 3rem;
    width: 50%;
    max-width: 520px;
  }
`

export function Reveal({ revealData, children }) {
  const ref = useRef(null)
  const { description, revealBg } = revealData
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center start'],
  })

  const yPos = scrollYProgress

  const position = useTransform(yPos, [0, 1], ['0vh', '100vh'])
  const negPos = useTransform(yPos, [0, 1], ['0vh', '-100vh'])
  const opacity = useTransform(yPos, [0, 0.5, 0.75, 1], [1, 1, 0, 0])

  return (
    <>
      <motion.section layout style={{ y: position }} ref={ref} className={className}>
        <div className='overview'>{children}</div>

        <motion.div
          style={{ opacity: opacity }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
          className={`${className} bg`}>
          <div className='bg' />
        </motion.div>
        <motion.div style={{ y: negPos }} className={`${className} desc`}>
          <p>{description}</p>
        </motion.div>
      </motion.section>
      {styles}
      <style jsx>
        {`
          p {
            text-transform: none;
            font-size: var(--fs-medium);
            line-height: 2;
          }
          .bg {
            background-image: url(${revealBg});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            height: 100vh;
          }
        `}
      </style>
    </>
  )
}
