import Animation from '../animation_v1'
import styles from './section_4.module.css'

function Section4() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.element1}>
          <Animation />
        </div>
        <div className={styles.element2}>
          <h2 className={styles.h2}>
            Analyze your audience and keep your followers engaged
          </h2>
          <p className={styles.p}>
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <div className={styles.getStartedButtonContainer}>
            <a>
              <div className={styles.getStartedButton}>
                Get started for free
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Section4 }
