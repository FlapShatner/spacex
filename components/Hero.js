export function Hero({ heroData }) {
  const { title, tagline, bg } = heroData
  return (
    <>
      <section className='hero'>
        <div className='wrapper'>
          <h1>{title}</h1>
          <h4>{tagline}</h4>
        </div>
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
