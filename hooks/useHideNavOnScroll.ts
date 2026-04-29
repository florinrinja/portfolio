import { useEffect, RefObject } from 'react';

export function useHideNavOnScroll(navRef: RefObject<HTMLElement>, hiddenClass: string) {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastScrollTime || 1;
      const velocity = deltaY / deltaTime; // negative = scrolling up

      const atTop = currentScrollY <= 50;
      const fastFlickUp = velocity < -1.5;

      if (atTop || fastFlickUp) {
        navRef.current?.classList.remove(hiddenClass);
      } else if (deltaY > 0 && currentScrollY > 50) {
        navRef.current?.classList.add(hiddenClass);
      }

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}