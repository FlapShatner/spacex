// import styles from './falcon-9.module.css'
import Overview from '../../../components/stats/Overview'

import Engines from '../../../components/engines'
import { motion, AnimatePresence } from 'framer-motion'

import Carousel from '../../../components/Carousel'
import { falconData } from '../../../data/falconData'
import { Counter } from '../../../components/Counter'
import { PageFooter } from '../../../components/PageFooter'
import { Hero } from '../../../components/Hero'
import Video from '../../../components/Video'
import { Reveal } from '../../../components/stats/Reveal'

export default function Falcon9() {
  const { slidesArr, imgPath, counterStats, engineStats, falconStats, revealData, heroData, videoData } = falconData

  return (
    <>
      <Hero heroData={heroData} />
      <Counter counterStats={counterStats} />
      <div className='info'>
        <Reveal revealData={revealData} />
        <Overview stats={falconStats} />
      </div>
      <Video videoData={videoData} />
      <Engines engineStats={engineStats} />
      <Carousel imgPath={imgPath} slidesArr={slidesArr} />
      <PageFooter />
      <style jsx>
        {`
          .info {
            position: relative;
            height: 200vh;
          }
        `}
      </style>
    </>
  )
}
