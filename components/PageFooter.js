import Button from './common/Button'

export function PageFooter({}) {
  return (
    <>
      <section className='pageFooter'>
        <div className='inner'>
          <div className='line' />
          <p className='launchContact'>
            For information about our launch services, contact <a href='mailto: sales@spacex.com'>sales@spacex.com</a>
          </p>
          <div className='btnGroup'>
            <Button style={'margin-inline: 12px'}>Download User's Guide</Button>
            <Button style={'margin-inline: 12px'}>Capabilities and Services</Button>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .pageFooter {
          }
          .inner {
            height: 290px;
            max-width: 960px;
            margin: 75px auto;
          }
          .line {
            height: 140px;
            width: 1px;
            background-color: #fff;
            display: block;
            margin: 0 auto;
          }
          .launchContact {
            font-size: var(--fs-small);
            text-transform: none;
            color: var(--clr-gray);

            text-align: center;
            margin: 40px 0 30px;
          }
          .btnGroup {
            display: flex;
            width: min-content;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}
