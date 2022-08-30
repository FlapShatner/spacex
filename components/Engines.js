import { motion } from 'framer-motion'
import css from 'styled-jsx/css'
import { useState } from 'react'

const { className, styles } = css.resolve``

export default function Engines({ engineStats }) {
  const { name, seaLevel, vacuum } = engineStats
  const [sea, setSea] = useState(true)

  let imgUrl

  if (sea) {
    imgUrl = seaLevel.imgUrl
  } else {
    imgUrl = vacuum.imgUrl
  }

  return (
    <>
      <div className='bg'>
        <section className='engines'>
          <div className='data'>
            <h4>Engines</h4>
            <h3>{name}</h3>
            <div className='buttons'>
              <button className={sea && 'active'} onClick={() => setSea(true)}>
                Sea Level
              </button>
              <span className='pipe'>|</span>
              <button className={!sea && 'active'} onClick={() => setSea(false)}>
                Vacuum
              </button>
            </div>
            <p>{sea ? seaLevel.desc : vacuum.desc}</p>
            <table>
              <tbody>
                <tr>
                  <td>Propellant</td>
                  <td className='right'>
                    {sea ? seaLevel.propel : vacuum.propel}
                    <span className='gray'>{sea ? seaLevel.propelGray : vacuum.propelGray}</span>
                  </td>
                </tr>
                <tr>
                  <td>Thrust</td>
                  <td className='right'>
                    {sea ? seaLevel.thrust : vacuum.thrust}
                    <span className='gray'>{sea ? seaLevel.thrustGray : vacuum.thrustGray}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <style jsx>{`
        .bg {
          background-image: url(${imgUrl});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .engines {
          height: 100vh;
        }

        .data {
          width: 400px;
          max-width: 520px;
          margin: 0 3rem 4rem;
          padding-top: 8rem;
        }
        .data h3 {
          font-size: var(--fs-large);
        }
        .pipe {
          color: var(--clr-gray);
          margin-inline: 1rem;
        }
        .buttons {
          margin-block: 2.25rem;
        }
        button {
          border: none;
          background-color: inherit;
          font-size: var(--fs-default);
          font-weight: 700;
          line-height: 1;
          color: var(--clr-gray);
        }
        button:focus {
          border: none;
          border-bottom: 1px solid #fff;
        }
        .active {
          color: #fff;
        }
        p {
          text-transform: none;
          margin-bottom: 1.5rem;
        }
        table {
          width: 100%;
        }
        tbody {
          width: 100%;
        }
        td {
          padding-block: 1rem;
          border-bottom: 1px solid var(--clr-gray);
          border-collapse: collapse;
        }

        .right {
          text-align: right;
        }
        .gray {
          color: var(--clr-gray);
        }
      `}</style>
    </>
  )
}
