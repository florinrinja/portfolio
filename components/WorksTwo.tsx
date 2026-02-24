'use client'

import { useEffect, useRef } from 'react'
import styles from './Works.module.css'

const works = [
  {
    number: '04',
    category: 'Mobile App',
    title: 'Fitness Tracker',
    description: 'Cross-platform mobile application for tracking workouts and health metrics with social features.'
  },
  {
    number: '05',
    category: 'SaaS',
    title: 'Team Collaboration',
    description: 'Cloud-based collaboration tool for remote teams with real-time messaging and project management features.'
  },
  {
    number: '06',
    category: 'Creative',
    title: 'Interactive Art',
    description: 'Browser-based interactive art installation using WebGL and creative coding techniques.'
  }
]

export default function WorksTwo() {
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
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>06</span>
        <h2 className={styles.sectionTitle}>Recent Projects</h2>
      </div>
      <div className={styles.worksGrid}>
        {works.map((work, index) => (
          <div key={index} className={`${styles.workCard} fade-in`}>
            <div className={styles.workImage}>{work.number}</div>
            <div className={styles.workContent}>
              <div className={styles.workCategory}>{work.category}</div>
              <h3 className={styles.workTitle}>{work.title}</h3>
              <p className={styles.workDescription}>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
