import Animation from '../components/animation_v1'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div
          style={{
            display: 'flex',
            width: '90%',
            paddingTop: '150px',
            margin: 'auto',
          }}
        >
          <div className={styles.element1}>
            <h1 className={styles.h1}>
              Everything you are. In one, simple link in bio.
            </h1>
            <p className={styles.p}>
              Join 35M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>
            <form style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  height: '62px',
                  width: '243px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '19px 16px',
                  color: 'rgb(103, 107, 95)',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '18px',
                }}
              >
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  linktr.ee/
                </p>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input
                    type="text"
                    placeholder="yourname"
                    style={{
                      border: '0px',
                      outline: '0px',
                      fontSize: '18px',
                      width: '70%',
                    }}
                  />
                </p>
              </div>
              <div>
                <button
                  style={{
                    width: '212px',
                    height: '62px',
                    backgroundColor: 'rgb(233, 192, 233)',
                    border: '0px',
                    outline: '0px',
                    fontSize: '18px',
                    color: 'rgb(30, 35, 48)',
                    borderRadius: '31px',
                  }}
                >
                  Claim your Linktree
                </button>
              </div>
            </form>
          </div>
          <div className={styles.element2}>
            <Animation />
          </div>
        </div>
      </section>
    </main>
  )
}
