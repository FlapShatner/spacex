import { useRef } from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import css from 'styled-jsx/css'

export function Counter({ counterStats }) {
  const { launches, landings, reflights } = counterStats

  const { className, styles } = css.resolve`
    h4 {
      font-size: var(--fs-xmedium);
    }
  `

  return (
    <>
      <section className='counter'>
        <div className='stats'>
          <div className='statWrapper'>
            <CountUp enableScrollSpy start={0} end={launches} duration={1.5}>
              {({ countUpRef }) => <span className='stat' ref={countUpRef} />}
            </CountUp>
            <motion.h4
              className={className}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              viewport={{ once: false }}>
              Total Launches
            </motion.h4>
          </div>
          <div className='statWrapper'>
            <CountUp enableScrollSpy start={0} end={landings} duration={1.5}>
              {({ countUpRef }) => <span className='stat' ref={countUpRef} />}
            </CountUp>
            <motion.h4
              className={className}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              viewport={{ once: false }}>
              Total Landings
            </motion.h4>
          </div>
          <div className='statWrapper'>
            <CountUp enableScrollSpy start={0} end={reflights} duration={1.5}>
              {({ countUpRef }) => <span className='stat' ref={countUpRef} />}
            </CountUp>
            <motion.h4
              className={className}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              viewport={{ once: false }}>
              Total Reflights
            </motion.h4>
          </div>
        </div>
      </section>
      {styles}
      <style jsx>
        {`
          .stats {
            display: flex;
            width: 100%;
            max-width: 960px;
            justify-content: space-around;
          }
          .statWrapper {
            width: 100%;
            max-width: 288px;
          }
          .counter {
            display: flex;
            width: 100%;
            justify-content: center;
            text-align: center;
            padding-block: 4.5rem;
          }

          span.stat {
            font-size: var(--fs-xxlarge);
            font-weight: var(--fw-regular);
            line-height: 1;
          }
        `}
      </style>
    </>
  )
}
