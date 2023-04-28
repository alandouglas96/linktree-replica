import Animation from '../animation_v1'
import styles from './section_3.module.css'

function Section3() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={styles.element1}>
          <h2 className={styles.h2}>
            Share your Linktree from your Instagram, TikTok, Twitter and other
            bios
          </h2>
          <p className={styles.p}>
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </p>
          <div className={styles.getStartedButtonContainer}>
            <a>
              <div className={styles.getStartedButton}>
                Get started for free
              </div>
            </a>
          </div>
        </div>
        <div className={styles.element2}>
          <Animation />
        </div>
      </div>
    </section>
  )
}

export { Section3 }
