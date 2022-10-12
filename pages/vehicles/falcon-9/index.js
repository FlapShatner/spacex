// import styles from './falcon-9.module.css'
import Overview from '../../../components/statSlider/Overview'

import Engines from '../../../components/Engines'
import { motion, AnimatePresence } from 'framer-motion'

import Carousel from '../../../components/Carousel'
import { falconData } from '../../../data/falconData'
import { Counter } from '../../../components/Counter'
import { PageFooter } from '../../../components/PageFooter'
import { Hero } from '../../../components/Hero'
import Video from '../../../components/Video'
import { Reveal } from '../../../components/statSlider/Reveal'
import FirstStage from '../../../components/statSlider/FirstStage'

export default function Falcon9() {
  const { slidesArr, imgPath, counterStats, engineStats, falconStats, revealData, heroData, videoData, fSData } =
    falconData

  return (
    <>
      <Hero heroData={heroData} />
      <Counter counterStats={counterStats} />

      {/* <Overview stats={falconStats} /> */}

      <Reveal stats={falconStats} revealData={revealData}>
        <Overview stats={falconStats} />
      </Reveal>
      <FirstStage data={fSData} />

      <Video videoData={videoData} />
      <Engines engineStats={engineStats} />
      <Carousel imgPath={imgPath} slidesArr={slidesArr} />
      <PageFooter />
    </>
  )
}
