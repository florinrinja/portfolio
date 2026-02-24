'use client'

import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const skills = [
  {
    category: 'Frontend',
    name: 'Web Development',
    description: 'HTML, CSS, JavaScript, React, Vue.js'
  },
  {
    category: 'Design',
    name: 'UI/UX Design',
    description: 'Figma, Adobe XD, Sketch, Prototyping'
  },
  {
    category: 'Backend',
    name: 'Server-Side',
    description: 'Node.js, Python, APIs, Databases'
  },
  {
    category: 'Tools',
    name: 'Development',
    description: 'Git, Docker, CI/CD, Testing'
  }
]

export default function Skills() {
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
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>02</span>
        <h2 className={styles.sectionTitle}>Skills</h2>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={`${styles.skillCard} fade-in`}>
            <div className={styles.skillCategory}>{skill.category}</div>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
