'use client'

import { useEffect, useRef } from 'react'
import styles from './Timeline.module.css'

const education = [
  {
    date: '2018 — 2022',
    title: 'Bachelor of Computer Science',
    subtitle: 'University Name',
    description: 'Focused on software engineering, web technologies, and human-computer interaction. Graduated with honors.'
  },
  {
    date: '2016 — 2018',
    title: 'Design Certification',
    subtitle: 'Design Institute',
    description: 'Comprehensive training in visual design, typography, and user experience principles.'
  }
]

export default function Education() {
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
    <section id="education" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>03</span>
        <h2 className={styles.sectionTitle}>Education</h2>
      </div>
      <div className={styles.timeline}>
        {education.map((item, index) => (
          <div key={index} className={`${styles.timelineItem} fade-in`}>
            <div className={styles.timelineDate}>{item.date}</div>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <div className={styles.timelineSubtitle}>{item.subtitle}</div>
            <p className={styles.timelineDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
