import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import Prev from './common/Prev'
import Next from './common/Next'

export default function Carousel({ slidesArr, imgPath }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <section className='container'>
        <div className='embla'>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container'>
              {slidesArr.map((desc, i) => (
                <div className='embla__slide'>
                  <img className='slideImg' src={imgPath + i + '.webp'} alt={desc} />
                  <div className='description'>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className='embla__prev prev' onClick={scrollPrev}>
            <Prev color={'#fff'} />
          </button>
          <button className='embla__next next' onClick={scrollNext}>
            <Next color={'#fff'} />
          </button>
        </div>
      </section>
      <style jsx>
        {`
          .container {
            position: relative;
            height: 100vh;
            width: 100%;
          }
          .embla {
            overflow: hidden;
          }
          .embla__container {
            display: flex;
          }
          .embla__slide {
            flex: 0 0 100%;
          }
          .description {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p {
            text-transform: none;
          }
          .slideImg {
            height: calc(100vh - 100px);
            width: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
          button {
            border: none;
            background-color: inherit;
            position: absolute;
            bottom: 35px;
          }
          .prev {
            left: 50px;
          }
          .next {
            right: 50px;
          }
        `}
      </style>
    </>
  )
}
