'use client';

import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Florin RINJA</div>
      <ul className={styles.navLinks}>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
        <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
        <li><a href="#works" onClick={(e) => scrollToSection(e, 'works')}>Works</a></li>
        <li>
          <a
            href="/Florin RINJA CV.pdf"
            download
            className={styles.downloadCv}
          >
            Download CV
          </a>
        </li>
        <li>
          <div
            className={styles.themeToggle}
            onClick={toggleTheme}
            role="button"
            aria-label="Toggle theme"
          />
        </li>
      </ul>
    </nav>
  );
};
