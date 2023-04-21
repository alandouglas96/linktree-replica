'use client'

import { useRef, useState } from 'react'
import styles from './page.module.css'

const DEG_ROTATION = 25

export default function Home() {
  const anchorRef = useRef()

  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMove(e) {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rekt = anchorRef.current.getBoundingClientRect()

    setPosition({ x: mouseX - rekt.x, y: mouseY - rekt.y })
  }

  return (
    <main className={styles.main} onMouseMove={handleMove}>
      <div
        style={{
          transformStyle: 'preserve-3d',
          height: '300px',
          width: '300px',
          transform: `rotateX(${position.y / -DEG_ROTATION}deg) rotateY(${
            position.x / DEG_ROTATION
          }deg)`,
        }}
      >
        <div ref={anchorRef} className={styles.element1}></div>
        <div
          className={styles.element2}
          style={{
            transform: `translateZ(40px)`,
          }}
        ></div>
        <div
          className={styles.element3}
          style={{
            transform: `translateZ(40px)`,
          }}
        >
          ❤️
        </div>
      </div>
    </main>
  )
}
