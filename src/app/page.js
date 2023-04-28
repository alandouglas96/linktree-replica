import { NavBar } from '../components/navigation'
import { Section1 } from '../components/sections/section_1'
import { Section2 } from '../components/sections/section_2'
import { Section3 } from '../components/sections/section_3'
import { Section4 } from '../components/sections/section_4'
import { Section5 } from '../components/sections/section_5'
import { Section6 } from '../components/sections/section_6'
import { Section7 } from '../components/sections/section_7'
import { Section8 } from '../components/sections/section_8'
import { Section9 } from '../components/sections/section_9'
import { Section10 } from '../components/sections/section_10'
import { Section11 } from '../components/sections/section_11'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navBackgroundPosition} />
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </main>
  )
}
