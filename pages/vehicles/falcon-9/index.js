import styles from './falcon-9.module.css'

export default function Falcon9() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <h1>Falcon 9</h1>
          <h4>First orbital class rocket capable of reflight</h4>
        </div>
      </section>
      <section className={styles.counter}>
        <div className={styles.statWrapper}>
          <h2>170</h2>
          <h4>Total Launches</h4>
        </div>
        <div className={styles.statWrapper}>
          <h2>130</h2>
          <h4>Total Landings</h4>
        </div>
        <div className={styles.statWrapper}>
          <h2>109</h2>
          <h4>Total Reflights</h4>
        </div>
      </section>
    </>
  )
}
