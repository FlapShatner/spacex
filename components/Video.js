import { useState } from 'react'
import Play from '../components/common/Play'

import Modal from './Modal'

export default function Video({ videoData }) {
  const [showModal, setShowModal] = useState(false)
  const { caption, embedId, bgUrl } = videoData

  return (
    <>
      <section onClick={() => setShowModal(true)} className='videoBg'>
        <div className='playWrapper'>
          <div className='play'>
            <Play />
          </div>
        </div>
        <div className='caption'>
          <h4>Video</h4>
          <h3>{caption}</h3>
        </div>
      </section>
      <Modal eid={embedId} onClose={() => setShowModal(false)} show={showModal} />
      <style jsx>
        {`
          .videoBg {
            position: relative;
            display: flex;
            align-items: flex-end;
            height: 100vh;
            background-image: url(${bgUrl});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .caption {
            margin-left: 3rem;
            margin-bottom: 8rem;
          }
          .caption h3 {
            font-size: var(--fs-large);
          }
          .playWrapper {
            position: absolute;
            inset: 0;
            cursor: pointer;
          }
          .play {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40px;
            transition: 0.3s ease;
          }
          .playWrapper:hover .play {
            transform: scale(80%);
          }
        `}
      </style>
    </>
  )
}
