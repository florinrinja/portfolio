'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Works.module.css';

type Work = {
  number: string;
  category: string;
  title: string;
  description: string;
  longDescription?: string;
  demoUrl?: string;
  githubUrl?: string;
  previewImage?: string;
};

const works: Work[] = [
  {
    number: '01',
    category: 'Weather Application',
    title: 'Weather',
    description: 'A weather application showing current conditions and forecasts, built with React.',
    longDescription: 'A weather application showing current conditions and forecasts, built with React.',
    demoUrl: '/apps/weather',
    githubUrl: 'https://github.com/florinrinja/weather-app',
    previewImage: '/works/weather.svg',
  },
  {
    number: '02',
    category: 'Health & Nutrition',
    title: 'Scan Eat',
    description: 'A barcode scanning app that instantly retrieves nutritional information for any food product.',
    longDescription: 'A barcode scanning app that instantly retrieves nutritional information for any food product.',
    githubUrl: 'https://github.com/florinrinja/yuka',
    previewImage: '/works/scan-eat.svg',
  },
  {
    number: '03',
    category: 'Cinema',
    title: "phlo'ciné",
    description: "A personal cinema diary tracking my own ratings and reviews — my take on what's worth watching.",
    longDescription: "A personal cinema diary tracking my own ratings and reviews — my take on what's worth watching.",
  },
];

const WorksOne = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedWork) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    }
  }, [selectedWork]);

  return (
    <section id="works" className={styles.section} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>05</span>
        <h2 className={styles.sectionTitle}>Featured Works</h2>
      </div>

      <div className={styles.worksGrid}>
        {works.map((work, index) => (
          <div
            key={index}
            className={`${styles.workCard} fade-in`}
            onClick={() => setSelectedWork(work)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedWork(work)}
          >
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
            <div className={styles.workContent}>
              <div className={styles.workCategory}>{work.category}</div>
              <h3 className={styles.workTitle}>{work.title}</h3>
              <p className={styles.workDescription}>{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedWork(null)}
        >
          <div
            className={styles.modalPanel}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedWork(null)}
              aria-label="Close"
            >
              ✕
            </button>

            {selectedWork.previewImage && (
              <img
                src={selectedWork.previewImage}
                alt={`${selectedWork.title} preview`}
                className={styles.modalImage}
              />
            )}

            <div className={styles.modalBody}>
              <div className={styles.modalCategory}>{selectedWork.category}</div>
              <h2 className={styles.modalTitle}>{selectedWork.title}</h2>
              <p className={styles.modalDescription}>{selectedWork.longDescription}</p>

              {(selectedWork.demoUrl || selectedWork.githubUrl) && (
                <div className={styles.modalLinks}>
                  {selectedWork.demoUrl && (
                    <a
                      href={selectedWork.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalLinkDemo}
                    >
                      Live demo
                    </a>
                  )}
                  {selectedWork.githubUrl && (
                    <a
                      href={selectedWork.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalLinkGithub}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
};

export default WorksOne;