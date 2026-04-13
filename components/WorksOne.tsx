'use client'

import { useEffect, useRef } from 'react'
import styles from './Works.module.css'

type Work = {
  number: string
  category: string
  title: string
  description: string
  url?: string
  previewImage?: string
}

const works: Work[] = [
  {
    number: '01',
    category: 'Weather Application',
    title: 'Weather App',
    description: 'A weather application showing current conditions and forecasts, built with React.',
    url: '/apps/weather',
    previewImage: '/works/weather-preview.png',
  },
  {
    number: '02',
    category: 'E-Commerce',
    title: 'Shop Platform',
    description: 'Modern e-commerce platform with seamless checkout experience, inventory management, and responsive design.',
  },
  {
    number: '03',
    category: 'Portfolio',
    title: 'Creative Portfolio',
    description: 'Minimalist portfolio website showcasing photography and creative work with smooth animations and elegant typography.',
  },
]

export default function WorksOne() {
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

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="works" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>05</span>
        <h2 className={styles.sectionTitle}>Featured Works</h2>
      </div>
      <div className={styles.worksGrid}>
        {works.map((work, index) => {
          const imageArea = (
            <div className={styles.workImage}>
              {work.previewImage ? (
                <img
                  src={work.previewImage}
                  alt={`${work.title} preview`}
                  className={styles.workImagePreview}
                />
              ) : (
                work.number
              )}
            </div>
          )

          return (
            <div key={index} className={`${styles.workCard} fade-in`}>
              {work.url ? (
                <a href={work.url} className={styles.workImageLink} target="_blank" rel="noopener noreferrer">
                  {imageArea}
                </a>
              ) : (
                imageArea
              )}
              <div className={styles.workContent}>
                <div className={styles.workCategory}>{work.category}</div>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <p className={styles.workDescription}>{work.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
