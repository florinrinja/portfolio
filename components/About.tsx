'use client'

import { useEffect, useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach(el => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>01</span>
        <h2 className={styles.sectionTitle}>About</h2>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>Hello! I&apos;m a passionate developer and designer focused on creating digital experiences that blend technical excellence with aesthetic beauty. My work spans across web development, interface design, and creative coding.</p>
          <br />
          <p>I believe in the power of minimalism, attention to detail, and the importance of crafting solutions that are not only functional but also delightful to use.</p>
        </div>
        <div className={styles.aboutStats}>
          <div className={`${styles.statItem} fade-in`}>
            <div className={styles.statLabel}>Years Experience</div>
            <div className={styles.statValue}>5+</div>
          </div>
          <div className={`${styles.statItem} fade-in`}>
            <div className={styles.statLabel}>Projects Completed</div>
            <div className={styles.statValue}>50+</div>
          </div>
          <div className={`${styles.statItem} fade-in`}>
            <div className={styles.statLabel}>Happy Clients</div>
            <div className={styles.statValue}>30+</div>
          </div>
        </div>
      </div>
    </section>
  )
}
