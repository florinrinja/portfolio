'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './Navigation.module.css';
import { useHideNavOnScroll } from '../hooks/useHideNavOnScroll';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useHideNavOnScroll(navRef, styles.navHidden);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const links = () => (
    <>
      <li><a href="#about"      onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
      <li><a href="#skills"     onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
      <li><a href="#education"  onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
      <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
      <li><a href="#works"      onClick={(e) => scrollToSection(e, 'works')}>Works</a></li>
      <li>
        <a href="/Florin RINJA CV.pdf" download className={styles.downloadCv}>
          Download CV
        </a>
      </li>
    </>
  );

  return (
    <>
      <nav ref={navRef}  className={styles.nav}>
        <div className={styles.logo}>Florin RINJA</div>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {links()}
          <li>
            <div
              className={styles.themeToggle}
              onClick={toggleTheme}
              role="button"
              aria-label="Toggle theme"
            />
          </li>
        </ul>

        {/* Mobile: theme toggle + hamburger */}
        <div className={styles.mobileControls}>
          <div
            className={styles.themeToggle}
            onClick={toggleTheme}
            role="button"
            aria-label="Toggle theme"
          />
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <ul className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {links()}
      </ul>
    </>
  );
}