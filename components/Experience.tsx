'use client'

import { useEffect, useRef } from 'react'
import styles from './Timeline.module.css'

const experience = [
  {
    date: '2022 — Present',
    title: 'Senior Frontend Developer',
    subtitle: 'Tech Company Name',
    description: 'Leading frontend development initiatives, mentoring junior developers, and architecting scalable web applications using modern frameworks and best practices.'
  },
  {
    date: '2020 — 2022',
    title: 'Full Stack Developer',
    subtitle: 'Startup Name',
    description: 'Developed full-stack applications, implemented responsive designs, and collaborated with cross-functional teams to deliver high-quality products.'
  },
  {
    date: '2019 — 2020',
    title: 'Junior Developer',
    subtitle: 'Agency Name',
    description: 'Built client websites, maintained existing codebases, and gained hands-on experience with modern web development workflows.'
  }
]

export default function Experience() {
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
    <section id="experience" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>04</span>
        <h2 className={styles.sectionTitle}>Experience</h2>
      </div>
      <div className={styles.timeline}>
        {experience.map((item, index) => (
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
