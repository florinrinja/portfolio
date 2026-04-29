import { useEffect, RefObject } from 'react';

export function useHideNavOnScroll(navRef: RefObject<HTMLElement>, hiddenClass: string) {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {      
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      if (navRef.current) {
        if (scrollingDown && currentScrollY > 50) {
          navRef.current.classList.add(hiddenClass);
        } else {
          navRef.current.classList.remove(hiddenClass);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}