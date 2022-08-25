import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import YoutubeEmbed from './common/YoutubeEmbed'
import Close from './common/Close'

function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const modalContent = show ? (
    <>
      <section className='video'>
        <div onClick={onClose} className='close'>
          <Close />
        </div>

        <YoutubeEmbed embedId={'Z4TXCZG_NEY'} />
      </section>
      <style jsx>{`
        .video {
          isolation: isolate;
          position: fixed;
          inset: 0;
          display: grid;
          place-content: center;
          background: #000;
          color: #fff;
        }
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
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
}

export default Modal
