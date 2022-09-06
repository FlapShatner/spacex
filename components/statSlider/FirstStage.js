import { useState } from 'react'
import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  p {
    text-transform: none;
    max-width: 85%;
    font-size: var(--fs-default);
    margin-bottom: 1rem;
    line-height: 1.7;
  }
`

export default function FirstStage({ data }) {
  const [tab, setTab] = useState('overview')
  const { overview, engines, legs } = data

  return (
    <>
      <section>
        <div className='data'>
          <div className='title'>
            <h4>{data.vehicle}</h4>
            <h3>First Stage</h3>
          </div>
          <div className='buttons'>
            <button onClick={() => setTab('overview')} className={tab === 'overview' && 'active'}>
              Overview
            </button>
            <span className='pipe'>|</span>
            <button onClick={() => setTab('engines')} className={tab === 'engines' && 'active'}>
              Engines
            </button>
            <span className='pipe'>|</span>
            <button onClick={() => setTab('legs')} className={tab === 'legs' && 'active'}>
              Landing Legs
            </button>
          </div>
          <div className='desc'>
            {tab === 'overview' && <FsOverview data={overview} />}
            {tab === 'engines' && <FsEngines data={engines} />}
            {tab === 'legs' && <FsLegs data={legs} />}
          </div>
        </div>
      </section>
      <style jsx>
        {`
          section {
            position: relative;
            width: 100%;
            height: 100vh;
            background-image: url(/img/f9/f9_fs_Overview.webp);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            display: grid;
            align-items: center;
          }
          .data {
            max-width: 520px;
            height: 50vh;
            margin: 3rem;
          }
          h3 {
            line-height: 1;
            font-size: var(--fs-large);
            margin-bottom: 48px;
            margin-top: 0.75rem;
          }
          button {
            cursor: pointer;
            border: none;
            background-color: inherit;
            font-size: var(--fs-default);
            font-weight: 700;
            line-height: 1;
            color: var(--clr-gray);
            transition: 0.3s ease-out;
          }
          button:hover {
            color: #fff;
          }

          button:focus {
            border: none;
            border-bottom: 1px solid #fff;
          }

          .buttons {
            margin-bottom: 2rem;
          }
          .active {
            color: #fff;
          }

          .pipe {
            margin-inline: 1rem;
            color: var(--clr-gray);
          }
        `}
      </style>
    </>
  )
}

function FsOverview({ data }) {
  return (
    <>
      {data.map((p) => (
        <p className={className}> {p}</p>
      ))}
      {styles}
    </>
  )
}

function FsEngines({ data }) {
  return (
    <>
      <p className={className}>{data.desc}</p>
      <table>
        <tbody>
          <tr>
            <td>NUMBER OF ENGINES</td>
            <td className='right'>{data.number}</td>
          </tr>
          <tr>
            <td>THRUST AT SEA LEVEL</td>
            <td className='right'>
              {data.sea} <span>{data.seaImp}</span>
            </td>
          </tr>
          <tr>
            <td>THRUST IN VACUUM</td>
            <td className='right'>
              {data.vac} <span>{data.vacImp}</span>
            </td>
          </tr>
        </tbody>
      </table>
      {styles}
      <style jsx>{`
        table {
          width: 100%;
          margin-top: 2rem;
        }
        tbody {
          width: 100%;
        }
        td {
          text-transform: none;
          padding-block: 1rem;
          border-bottom: 1px solid var(--clr-gray);
          border-collapse: collapse;
        }

        .right {
          text-align: right;
        }
        span {
          color: var(--clr-gray);
        }
      `}</style>
    </>
  )
}

function FsLegs({ data }) {
  return (
    <>
      {data.map((p, i) => (
        <p key={i} className={className}>
          {p}
        </p>
      ))}

      {styles}
    </>
  )
}
