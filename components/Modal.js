import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import YoutubeEmbed from './common/YoutubeEmbed'
import Close from './common/Close'
import css from 'styled-jsx/css'
import { motion, AnimatePresence } from 'framer-motion'

const { className, styles } = css.resolve`
  section {
    isolation: isolate;
    position: fixed;
    inset: 0;
    display: grid;
    place-content: center;
    background: #000;
    color: #fff;
  }
`

function Modal({ show, onClose, children, title, eid }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [loadVideo, setLoadVideo] = useState(false)

  function handleClose() {
    onClose()
    setLoadVideo(false)
  }

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const modalContent = (
    <AnimatePresence onExitComplete={() => setLoadVideo(false)}>
      {show ? (
        <>
          <motion.section
            layout
            key='modal'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.1 }}
            onAnimationComplete={() => setLoadVideo(true)}
            exit={{ y: '-100%' }}
            className={className}>
            <div onClick={handleClose} className='close'>
              <Close />
            </div>

            {loadVideo ? <YoutubeEmbed embedId={eid} /> : null}
          </motion.section>

          {styles}
          <style jsx>{`
            .close {
              position: absolute;
              width: 2.5rem;
              fill: #fff;
              stroke: #fff;
              stroke-width: 2px;
              justify-self: right;
              margin: 1.6rem 2.35rem;
            }
          `}</style>
        </>
      ) : null}
    </AnimatePresence>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
}

export default Modal
