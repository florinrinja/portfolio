'use client'

import { useEffect, useRef } from 'react'
import styles from './Works.module.css'

const works = [
  {
    number: '07',
    category: 'Open Source',
    title: 'UI Component Library',
    description: 'Open-source React component library with accessibility-first approach and comprehensive documentation.'
  },
  {
    number: '08',
    category: 'Experiment',
    title: 'Design System',
    description: 'Comprehensive design system with tokens, components, and guidelines for consistent product experiences.'
  },
  {
    number: '09',
    category: 'Tool',
    title: 'Developer CLI',
    description: 'Command-line tool for automating common development workflows and boosting productivity.'
  }
]

export default function WorksThree() {
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
        <span className={styles.sectionNumber}>07</span>
        <h2 className={styles.sectionTitle}>Experimental Work</h2>
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
