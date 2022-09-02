export default function Overview(props) {
  const stats = props.stats
  const { imgUrl } = stats

  return (
    <>
      <section>
        <div className='table'>
          <h4>{stats.vehicle}</h4>
          <h3>{stats.heading}</h3>
          <table>
            <tbody>
              <tr>
                <td>{stats.height.name}</td>
                <td className='right'>
                  {stats.height.statMetric} <span>/ {stats.height.statImperial}</span>
                </td>
              </tr>
              <tr>
                <td>{stats.diameter.name}</td>
                <td className='right'>
                  {stats.diameter.statMetric} <span>/ {stats.diameter.statImperial}</span>
                </td>
              </tr>
              <tr>
                <td>{stats.mass.name}</td>
                <td className='right'>
                  {stats.mass.statMetric} <span>/ {stats.mass.statImperial}</span>
                </td>
              </tr>
              <tr>
                <td>{stats.payloadLeo.name}</td>
                <td className='right'>
                  {stats.payloadLeo.statMetric} <span>/ {stats.payloadLeo.statImperial}</span>
                </td>
              </tr>
              <tr>
                <td>{stats.payloadGto.name}</td>
                <td className='right'>
                  {stats.payloadGto.statMetric} <span>/ {stats.payloadGto.statImperial}</span>
                </td>
              </tr>
              <tr>
                <td>{stats.payloadMars.name}</td>
                <td className='right'>
                  {stats.payloadMars.statMetric} <span>/ {stats.payloadMars.statImperial}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          width: 100%;
          height: 100vh;
          background-image: url(${imgUrl});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .table {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          width: 50%;
          max-width: 520px;
          margin-inline: 3rem;
        }
        .table h3 {
          font-size: var(--fs-large);
        }
        table {
          width: 100%;
          margin-top: 1rem;
        }
        table .right {
          text-align: right;
        }
        td {
          font-size: var(--fs-default);
          padding-block: 1rem;
          border: none;
          border-bottom: 1px solid var(--clr-border);
        }
        span {
          color: var(--clr-gray);
        }
      `}</style>
    </>
  )
}
