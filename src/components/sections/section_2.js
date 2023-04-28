import Animation from '../animation_v1'
import styles from './section_2.module.css'

function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.element1}>
          <Animation />
        </div>
        <div className={styles.element2}>
          <h2 className={styles.h2}>
            Create and customize your Linktree in minutes
          </h2>
          <p className={styles.p}>
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
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

export { Section2 }
