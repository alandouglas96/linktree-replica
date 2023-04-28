import styles from './navigation.module.css'

function NavBar() {
  return (
    <div className={styles.stickyElement}>
      <div className={styles.stickyInner}>STICKEY</div>
    </div>
  )
}

export { NavBar }
