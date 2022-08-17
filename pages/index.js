import styles from '../styles/Home.module.css'

function Section({ children, bg, btn }) {
  return (
    <section className={`${styles.section} ${bg}`}>
      <div className={styles.sectionInner}>
        {children}
        <div className={styles.btn}>{btn}</div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* Section A */}
      <Section btn={'Rewatch'} bg={styles.sectionA}>
        <h4>Recent Launch</h4>
        <h2>Starlink Mission</h2>
      </Section>
      {/* Section B */}
      <Section btn={'Rewatch'} bg={styles.sectionB}>
        <h4>Recent Launch</h4>
        <h2>KPLO Mission</h2>
      </Section>
      {/* Section C */}
      <Section btn={'Learn More'} bg={styles.sectionC}>
        <h2>Starship Update</h2>
      </Section>
      {/* Section D */}
      <Section btn={'Learn More'} bg={styles.sectionD}>
        <h2>Starship to land NASA astronauts on the moon</h2>
      </Section>
    </>
  )
}
