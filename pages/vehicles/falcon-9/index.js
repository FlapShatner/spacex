// import styles from './falcon-9.module.css'
import Stats from '../../../components/stats-table/stats'
import Play from '../../../components/common/Play'
import Modal from '../../../components/Modal'
import { useState } from 'react'

export default function Falcon9() {
  const falconStats = {
    vehicle: 'Falcon 9',
    heading: 'Overview',
    height: {
      name: 'Height',
      statMetric: '70 m',
      statImperial: '229.6 ft',
    },
    diameter: {
      name: 'Diameter',
      statMetric: '3.7 m',
      statImperial: '12 ft',
    },
    mass: {
      name: 'Mass',
      statMetric: '549,054 kg',
      statImperial: '1,207,920 lb',
    },
    payloadLeo: {
      name: 'Payload to LEO',
      statMetric: '22,800 kg',
      statImperial: '50,265 lb',
    },
    payloadGto: {
      name: 'Payload to GTO',
      statMetric: '8,300 kg',
      statImperial: '18,300 lb',
    },
    payloadMars: {
      name: 'Payload to Mars',
      statMetric: '4,020 kg',
      statImperial: ' 8,860 lb',
    },
  }
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className='hero'>
        <div className='wrapper'>
          <h1>Falcon 9</h1>
          <h4>First orbital class rocket capable of reflight</h4>
        </div>
      </section>
      <section className='counter'>
        <div className='stats'>
          <div className='statWrapper'>
            <h2>170</h2>
            <h4>Total Launches</h4>
          </div>
          <div className='statWrapper'>
            <h2>130</h2>
            <h4>Total Landings</h4>
          </div>
          <div className='statWrapper'>
            <h2>109</h2>
            <h4>Total Reflights</h4>
          </div>
        </div>
      </section>
      <section className='overview'>
        <div className='description'>
          <p>
            Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe
            transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class
            reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn
            drives down the cost of space access.
          </p>
        </div>
        <Stats stats={falconStats} />
      </section>
      <section onClick={() => setShowModal(true)} className='videoBg'>
        <div className='playWrapper'>
          <div className='play'>
            <Play />
          </div>
        </div>
        <div className='caption'>
          <h4>Video</h4>
          <h3>Falcon 9 In Flight</h3>
        </div>
      </section>
      <Modal eid={'Z4TXCZG_NEY'} onClose={() => setShowModal(false)} show={showModal} />

      <style jsx>{`
        .hero {
          background-image: url('/img/f9-hero.webp');
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

        .counter {
          display: flex;
          width: 100%;
          justify-content: center;
          text-align: center;
          padding-block: 4.5rem;
        }
        .stats {
          display: flex;
          width: 100%;
          max-width: 960px;
          justify-content: space-around;
        }
        .counter h2 {
          font-size: var(--fs-xxlarge);
          font-weight: var(--fw-regular);
          line-height: 1;
        }
        .overview {
          background-image: url('/img/f9-render.webp');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .statWrapper {
          width: 100%;
          max-width: 288px;
        }
        .description {
          margin: 10rem 3rem;
        }
        .description p {
          text-transform: none;
          display: inline-block;
          max-width: 520px;
          font-size: var(--fs-medium);
          line-height: 2;
        }
        .videoBg {
          position: relative;
          display: flex;
          align-items: flex-end;
          height: 100vh;
          background-image: url('/img/f9_video.webp');
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
      `}</style>
    </>
  )
}
