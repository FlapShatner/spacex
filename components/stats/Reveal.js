export function Reveal({ revealData }) {
  const { description, revealBg } = revealData
  return (
    <>
      <section className='info'>
        <div className='bg'>
          <div className='description'>
            <p>{description}</p>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .bg {
            position: sticky;
            height: 100vh;
            top: 0;
            background-image: url(${revealBg});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

          .description {
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            margin-left: 3rem;
            width: 50%;
            max-width: 520px;
          }
          .description p {
            text-transform: none;
            font-size: var(--fs-medium);
            line-height: 2;
          }
        `}
      </style>
    </>
  )
}
